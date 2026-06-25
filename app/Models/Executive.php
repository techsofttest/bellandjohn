<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Executive extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function enquiries(): HasMany
    {
        return $this->hasMany(Order::class, 'executive_id');
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(EnquiryExecutiveAssignment::class);
    }
}
