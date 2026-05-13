<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();

            $table->decimal('subtotal', 10, 2)->default(0);
            $table->decimal('discount_total', 10, 2)->default(0);
            $table->decimal('tax_total', 10, 2)->default(0);
            $table->decimal('shipping_total', 10, 2)->default(0);
            $table->decimal('total', 10, 2)->default(0);
            $table->string('currency', 10)->default('INR');

            $table->foreignId('coupon_id')->nullable()->constrained()->nullOnDelete();
            $table->string('coupon_code')->nullable();
            $table->decimal('coupon_discount', 10, 2)->nullable();

            // Payment Info
            $table->enum('payment_method',['online','cod']);
            $table->enum('payment_status',['pending','paid','refunded','failed'])->default('pending');
            $table->timestamp('paid_at')->nullable();

            // Order Status
            $table->string('status')->default('pending');


            // Address (optional if stored separately)
            $table->json('billing_address')->nullable();
            $table->json('shipping_address')->nullable();

            // Metadata
            $table->text('notes')->nullable();
            $table->timestamp('placed_at')->nullable();

            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
