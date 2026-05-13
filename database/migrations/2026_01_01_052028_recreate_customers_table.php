<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Drop existing table if exists
        Schema::dropIfExists('customers');

        // Create new customers table
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique()->nullable();
            $table->string('phone')->nullable();

            // Social login
            $table->string('provider')->nullable(); // google, facebook
            $table->string('provider_id')->nullable();

            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        // Create customer addresses table
        Schema::create('customer_addresses', function (Blueprint $table) {

            $table->id();

            $table->foreignId('customer_id')->constrained('customers')->cascadeOnDelete();

            $table->string('label')->nullable(); // Home, Work, etc.

            $table->string('fullname')->nullable();

            $table->string('address_line1');

            $table->string('address_line2')->nullable();

            $table->string('city');

            $table->string('state')->nullable();

            $table->string('country');

            $table->string('postal_code')->nullable();

            $table->enum('address_type', ['home', 'work'])->default('home');

            $table->boolean('is_default')->default(false);

            $table->timestamps();

        });
        
    }

    public function down(): void
    {
        Schema::dropIfExists('customer_addresses');
        Schema::dropIfExists('customers');
    }
};
