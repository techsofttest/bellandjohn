<?php

use App\Models\Country;
use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_featured_countries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('country_id')->constrained()->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['product_id', 'country_id'], 'uniq_product_country');
        });

        $countryIds = Country::query()->pluck('id');

        if ($countryIds->isEmpty()) {
            return;
        }

        $now = now();
        $rows = Product::query()
            ->where('is_featured', true)
            ->select('id')
            ->get()
            ->flatMap(function (Product $product) use ($countryIds, $now) {
                return $countryIds->map(function ($countryId) use ($product, $now) {
                    return [
                        'product_id' => $product->id,
                        'country_id' => $countryId,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                });
            })
            ->values()
            ->all();

        if (!empty($rows)) {
            DB::table('product_featured_countries')->insert($rows);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_featured_countries');
    }
};
