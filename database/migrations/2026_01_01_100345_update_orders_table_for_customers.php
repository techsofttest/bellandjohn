<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {

            // Drop foreign key by column name (calculates correct name including prefix)
            $table->dropForeign(['user_id']);

            // Drop column
            $table->dropColumn('user_id');

            // Add customer_id
            $table->foreignId('customer_id')
                ->nullable()
                ->after('order_number')
                ->constrained('customers')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {

            // Drop customer FK
            $table->dropForeign(['customer_id']);
            $table->dropColumn('customer_id');

            // Restore user_id
            $table->foreignId('user_id')
                ->nullable()
                ->after('order_number')
                ->constrained()
                ->nullOnDelete();
        });
    }
};
