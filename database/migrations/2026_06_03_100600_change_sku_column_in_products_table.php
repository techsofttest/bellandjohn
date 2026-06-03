<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $indexes = Schema::getIndexes('products');
        $hasSkuUnique = collect($indexes)->contains(fn ($index) => $index['unique'] && in_array('sku', $index['columns']));

        Schema::table('products', function (Blueprint $table) use ($hasSkuUnique) {
            if ($hasSkuUnique) {
                $table->dropUnique(['sku']);
            }
            $table->text('sku')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('sku')->unique()->nullable()->change();
        });
    }
};
