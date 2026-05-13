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
        Schema::table('products', function (Blueprint $table) {
            $table->string('sizes')->nullable()->after('description');
            $table->string('unit')->nullable()->after('sizes');
            $table->string('tax_class_code')->default('default')->after('is_featured');
            $table->decimal('shipping_freight', 10, 2)->default(0)->after('tax_class_code');
            $table->boolean('fixed_shipping_rate_only')->default(false)->after('shipping_freight');
            $table->string('shipping_type')->nullable()->after('fixed_shipping_rate_only');
            $table->decimal('shipping_method_markup', 10, 2)->default(0)->after('shipping_type');
            $table->decimal('shipping_flat_rate', 10, 2)->default(0)->after('shipping_method_markup');
            $table->text('shipping_disabled_methods')->nullable()->after('shipping_flat_rate');
            $table->text('shipping_enabled_methods')->nullable()->after('shipping_disabled_methods');
            $table->string('upc')->nullable()->after('shipping_enabled_methods');
            $table->string('seo_title')->nullable()->after('upc');
            $table->text('seo_description')->nullable()->after('seo_title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn([
                'sizes',
                'unit',
                'tax_class_code',
                'shipping_freight',
                'fixed_shipping_rate_only',
                'shipping_type',
                'shipping_method_markup',
                'shipping_flat_rate',
                'shipping_disabled_methods',
                'shipping_enabled_methods',
                'upc',
                'seo_title',
                'seo_description',
            ]);
        });
    }
};
