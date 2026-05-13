<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Drops the legacy master attribute tables since variants are now stored
     * as free-text JSON in the products.variant_options column.
     */
    public function up(): void
    {
        Schema::dropIfExists('attribute_value_product');
        Schema::dropIfExists('attribute_values');
        Schema::dropIfExists('attributes');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('attributes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('attribute_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId('attribute_id')->constrained()->cascadeOnDelete();
            $table->string('value');
            $table->timestamps();
        });

        Schema::create('attribute_value_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('attribute_value_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }
};
