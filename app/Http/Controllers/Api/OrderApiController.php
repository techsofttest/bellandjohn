<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EnquiryExecutiveAssignment;
use App\Models\Executive;
use App\Mail\QuoteRequestMail;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Exception;

class OrderApiController extends Controller
{
    /**
     * Place a new quote/order request
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:30',
            'company' => 'nullable|string|max:255',
            'country' => 'required|string|max:255',
            'address' => 'required|string|max:500',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'zip' => 'required|string|max:30',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required', // Relaxed to allow both integer id and slug string
            'items.*.qty' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()
            ], 422);
        }

        // Try to identify authenticated customer via Sanctum token if present
        $customer = $request->user('sanctum');
        $customerId = $customer ? $customer->id : null;

        DB::beginTransaction();

        try {
            // Generate unique Order/Quote number
            $orderNumber = 'BNJ-Q-' . time() . '-' . rand(1000, 9999);

            // Structure address JSON
            $addressJson = [
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'company' => $request->company ?? '',
                'country' => $request->country,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'zip' => $request->zip,
            ];

            // Create primary Order record
            $order = Order::create([
                'order_number' => $orderNumber,
                'customer_id' => $customerId,
                'customer_name' => trim($request->first_name . ' ' . $request->last_name),
                'customer_email' => $request->email,
                'customer_phone' => $request->phone,
                'subtotal' => 0, // Will calculate below
                'discount_total' => 0,
                'tax_total' => 0,
                'shipping_total' => 0,
                'total' => 0, // Will calculate below
                'currency' => $request->currency ?? 'INR',
                'payment_method' => 'cod', // Default to COD for quote requests
                'payment_status' => 'pending',
                'status' => 'pending',
                'billing_address' => $addressJson,
                'shipping_address' => $addressJson,
                'notes' => $request->notes ?? 'Quote enquiry submitted from checkout.',
                'placed_at' => now(),
            ]);

            $assignment = EnquiryExecutiveAssignment::where('customer_email', $request->email)->first();
            if ($assignment) {
                $order->executive_id = $assignment->executive_id;
                $order->save();
            }

            $subtotal = 0;

            // Save order items using the order_items pivot table
            foreach ($request->items as $itemData) {
                // Find product by id OR slug dynamically to support frontend SEO mapping
                $productIdentifier = $itemData['product_id'];
                $product = Product::where('id', $productIdentifier)
                    ->orWhere('slug', $productIdentifier)
                    ->first();
                
                if (!$product) {
                    throw new Exception("Product identifier '{$productIdentifier}' not found in the database.");
                }

                $qty = (int) $itemData['qty'];
                $price = (float) ($product->price ?? 0);
                $itemSubtotal = $price * $qty;

                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'variant_id' => $itemData['variant_id'] ?? null,
                    'title' => $product->title ?? $product->name,
                    'sku' => $itemData['sku'] ?? (is_array($product->sku) ? ($product->sku[0] ?? '') : ($product->sku ?? '')),
                    'quantity' => $qty,
                    'price' => $price,
                    'subtotal' => $itemSubtotal,
                    'tax' => 0,
                    'total' => $itemSubtotal,
                ]);

                $subtotal += $itemSubtotal;
            }

            // Update order with calculated totals
            $order->subtotal = $subtotal;
            $order->total = $subtotal;
            $order->save();

            DB::commit();

            // Send admin notification email
            try {
                $order->load('items.product');
                $adminEmail = env('MAIL_ADMIN_EMAIL', env('MAIL_FROM_ADDRESS', 'admin@bellnjohn.com'));
                Mail::to($adminEmail)->send(new QuoteRequestMail($order));
                if ($order->executive_id) {
                    $executive = Executive::find($order->executive_id);
                    if ($executive?->email) {
                        Mail::to($executive->email)->send(new QuoteRequestMail($order));
                    }
                }
            } catch (Exception $mailEx) {
                Log::warning('Quote request email failed: ' . $mailEx->getMessage());
            }

            try {
                $this->pushOrderToZohoCrm($order);
            } catch (Exception $zohoEx) {
                Log::warning('Zoho CRM push failed: ' . $zohoEx->getMessage());
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Quote request placed successfully.',
                'data' => [
                    'order_id' => $order->id,
                    'order_number' => $order->order_number,
                    'total' => $order->total,
                ]
            ], 201);

        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to save quote request: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get quote requests for the customer
     */
    public function myRequests(Request $request)
    {
        $email = $request->input('email');
        if (!$email) {
            $customer = $request->user('sanctum');
            if ($customer) {
                $email = $customer->email;
            }
        }

        if (!$email) {
            return response()->json([
                'status' => 'error',
                'message' => 'Email is required to fetch quote requests.'
            ], 400);
        }

        $requests = Order::where(function($query) use ($email) {
            $query->where('customer_email', $email)
                  ->orWhereHas('customer', function($subQ) use ($email) {
                      $subQ->where('email', $email);
                  });
        })
        ->with(['items.product'])
        ->orderBy('placed_at', 'desc')
        ->get();

        return response()->json([
            'status' => 'success',
            'data' => $requests
        ]);
    }

    /**
     * Push the quote request to Zoho CRM as a lead.
     */
    protected function pushOrderToZohoCrm(Order $order)
{
    // TODO: Remove this restriction once Zoho CRM is fully configured for all regions.
    $country = strtolower(trim($order->billing_address['country'] ?? ''));
    if (!in_array($country, ['uae', 'united arab emirates'])) {
        Log::info('Zoho CRM push skipped: order is not from UAE.', ['country' => $country]);
        return;
    }

    $zoho = config('services.zoho');

    if (empty($zoho['client_id']) || empty($zoho['client_secret']) || empty($zoho['refresh_token'])) {
        Log::warning('Zoho CRM credentials are not configured. Skipping push.');
        return;
    }

    $accessToken = $this->getZohoAccessToken($zoho);

    if (!$accessToken) {
        Log::warning('Zoho CRM access token could not be acquired. Skipping push.');
        return;
    } // <-- This closing brace was missing

    $payload = $this->buildZohoCrmLeadPayload($order);

    $response = Http::withHeaders([
        'Authorization' => 'Zoho-oauthtoken ' . $accessToken,
        'Content-Type' => 'application/json',
    ])
    ->acceptJson()
    ->post("{$zoho['api_domain']}/crm/v8/{$zoho['module']}", [
        'data' => [$payload],
        'trigger' => ['approval', 'workflow', 'blueprint'],
    ]);


    if (!$response->successful()) {
        Log::warning('Zoho CRM lead creation failed', [
            'status' => $response->status(),
            'body' => $response->body(),
        ]);
    }
}



    protected function getZohoAccessToken(array $zoho)
    {
        $response = Http::asForm()->post("{$zoho['auth_domain']}/oauth/v2/token", [
            'client_id' => $zoho['client_id'],
            'client_secret' => $zoho['client_secret'],
            'refresh_token' => $zoho['refresh_token'],
            'grant_type' => 'refresh_token',
        ]);

         Log::warning('Zoho Config', [
        'client_id' => $zoho['client_id'],
        'client_secret' => substr($zoho['client_secret'], 0, 8) . '...',
        'refresh_token' => substr($zoho['refresh_token'], 0, 20) . '...',
        'auth_domain' => $zoho['auth_domain'],
        ]);


        if (!$response->successful()) {
            Log::warning('Zoho CRM token refresh failed: ' . $response->status() . ' ' . $response->body());
            return null;
        }

        return $response->json('access_token');
    }

    protected function buildZohoCrmLeadPayload(Order $order)
    {
        $address = $order->billing_address ?? [];
        $productNames = $order->items->map(function ($item) {
            return $item->title;
        })->filter()->unique()->join(', ');

        $descriptionParts = [];
        if (!empty($order->notes)) {
            $descriptionParts[] = trim($order->notes);
        }
        if (!empty($productNames)) {
            $descriptionParts[] = 'Products: ' . $productNames;
        }


        return [
            'First_Name'  => $address['first_name'] ?? ($order->customer?->name ?? 'Unknown'),
            'Last_Name'   => $address['last_name'] ?? 'Unknown',
            'Email'       => $address['email'] ?? null,
            'Phone'       => $address['phone'] ?? null,
            'Company'     => $address['company'] ?: 'Individual',

            'Street'      => $address['address'] ?? '',
            'City'        => $address['city'] ?? '',
            'State'       => $address['state'] ?? '',
            'Zip_Code'    => $address['zip'] ?? '',
            'Country'     => $address['country'] ?? '',

            'Lead_Source' => 'Website Quote Request',
            'Description' => implode("\n", array_filter($descriptionParts)),
        ];
    }
}
