<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  
    protected $fillable = [
        'order_number',
        'customer_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'subtotal',
        'discount_total',
        'tax_total',
        'shipping_total',
        'total',
        'currency',
        'coupon_id',
        'coupon_code',
        'coupon_discount',
        'payment_method',
        'payment_status',
        'paid_at',
        'status',
        'billing_address',
        'shipping_address',
        'notes',
        'placed_at',
        'executive_id',
        'country',
    ];

    protected $casts = [
        'billing_address' => 'array',
        'shipping_address' => 'array',
        'placed_at' => 'datetime',
        'paid_at' => 'datetime',
    ];


    public function items() {
        return $this->hasMany(OrderItem::class);
    }

    public function coupon() {
        return $this->belongsTo(Coupon::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function executive()
    {
        return $this->belongsTo(Executive::class);
    }

}
