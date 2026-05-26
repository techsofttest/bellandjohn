<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $guarded = [];

    protected $casts = [
        'phone_numbers' => 'array',
        'is_active' => 'boolean',
        'is_default' => 'boolean',
    ];

    protected static function booted()
    {
        static::saving(function ($country) {
            if ($country->is_default) {
                static::where('id', '!=', $country->id)->update(['is_default' => false]);
            }
        });
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
