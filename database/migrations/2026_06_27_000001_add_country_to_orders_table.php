<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Column may already exist from a prior partial run — skip DDL if so.
        if (!Schema::hasColumn('orders', 'country')) {
            Schema::table('orders', function (Blueprint $table) {
                $table->string('country')->nullable()->after('shipping_address')->index();
            });
        }
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('country');
        });
    }
};
