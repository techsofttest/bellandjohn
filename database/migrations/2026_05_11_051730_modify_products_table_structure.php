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
            if (Schema::hasColumn('products', 'care_instructions')) {
                $table->dropColumn(['care_instructions', 'terms']);
            }
            
            if (!Schema::hasColumn('products', 'product_id')) {
                $table->string('product_id')->unique()->after('id')->nullable();
            }
            if (!Schema::hasColumn('products', 'sku')) {
                $table->string('sku')->unique()->after('product_id')->nullable();
            }
            if (!Schema::hasColumn('products', 'sub_sub_category_id')) {
                $table->foreignId('sub_sub_category_id')->nullable()->after('sub_category_id')->constrained('categories')->nullOnDelete();
            }
            if (!Schema::hasColumn('products', 'brand_id')) {
                $table->foreignId('brand_id')->nullable()->after('sub_sub_category_id')->constrained('brands')->nullOnDelete();
            }
            if (!Schema::hasColumn('products', 'variant_label')) {
                $table->string('variant_label')->nullable()->after('brand_id')->comment('Label for variants e.g., Size, Color, Weight');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->text('care_instructions')->nullable();
            $table->text('terms')->nullable();
            
            $table->dropForeign(['sub_sub_category_id']);
            $table->dropColumn('sub_sub_category_id');
            
            $table->dropForeign(['brand_id']);
            $table->dropColumn('brand_id');
            
            $table->dropColumn(['product_id', 'sku', 'variant_label']);
        });
    }
};
