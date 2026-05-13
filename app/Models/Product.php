<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    protected $guarded = []; 

    protected $casts = [
        'additional_images' => 'array',
        'variant_options' => 'array',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
        'fixed_shipping_rate_only' => 'boolean',
        'shipping_disabled_methods' => 'array',
        'shipping_enabled_methods' => 'array',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function subCategory(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'sub_category_id');
    }

    public function subSubCategory(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'sub_sub_category_id');
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function countries(): BelongsToMany
    {
        return $this->belongsToMany(Country::class);
    }

    public function getFirstAdditionalImageAttribute()
    {
        $images = $this->additional_images ?? [];
        return count($images) > 0 ? $images[0] : null;
    }



    public function wishlists()
    {
        return $this->hasMany(\App\Models\Wishlist::class);
    }

    public function isWishlistedByCustomer()
    {
        if (!auth('customer')->check()) {
            return false;
        }

        return $this->wishlists()
            ->where('customer_id', auth('customer')->id())
            ->exists();
    }

    public function reviews()
    {
        return $this->hasMany(ProductReview::class);
    }

    public function approvedReviews()
    {
        return $this->reviews()->where('is_approved', true);
    }

    public function getAverageRatingAttribute()
    {
        return round($this->approvedReviews()->avg('rating'), 1);
    }

    public function getReviewsCountAttribute()
    {
        return $this->approvedReviews()->count();
    }
}
