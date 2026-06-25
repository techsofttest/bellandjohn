<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EnquiryExecutiveAssignment extends Model
{
    protected $guarded = [];

    public function executive(): BelongsTo
    {
        return $this->belongsTo(Executive::class);
    }
}
