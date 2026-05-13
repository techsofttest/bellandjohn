<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Customer extends Authenticatable
{
    use Notifiable;

    protected $guarded = [];
    protected $hidden = ['password', 'remember_token'];
    protected $casts = ['email_verified_at' => 'datetime'];

    public function addresses()
    {
        return $this->hasMany(CustomerAddress::class);
    }

    public function wishlist()
    {
        return $this->hasMany(Wishlist::class);
    }

}
