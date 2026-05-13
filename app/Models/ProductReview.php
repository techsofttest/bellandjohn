<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    protected $guarded = [];

    protected $casts = [
        'rating' => 'integer',
        'is_approved' => 'boolean',
    ];

    /* ======================
     | RELATIONSHIPS
     ====================== */

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /* ======================
     | HELPERS
     ====================== */

    public static function customerHasPurchasedProduct(int $customerId, int $productId): bool
    {
        return OrderItem::where('product_id', $productId)
            ->whereHas('order', function ($q) use ($customerId) {
                $q->where('customer_id', $customerId)
                  ->where('payment_status', 'paid');
            })
            ->exists();
    }
}

