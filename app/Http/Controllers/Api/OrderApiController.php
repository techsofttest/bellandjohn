<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\QuoteRequestMail;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
                    'sku' => $product->sku ?? '',
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
            } catch (Exception $mailEx) {
                Log::warning('Quote request email failed: ' . $mailEx->getMessage());
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
            $query->where('billing_address->email', $email)
                  ->orWhere('shipping_address->email', $email)
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
}
