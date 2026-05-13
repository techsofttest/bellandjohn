<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use App\Models\User;
use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OrdersOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        $totalOrders = Order::count();
        $totalUsers = User::count();
        $totalProducts = Product::count();
        return [
             Stat::make('Total Orders', $totalOrders)
                ->description('All time orders')
                ->descriptionIcon('heroicon-o-shopping-bag')
                ->color('primary'),

            Stat::make('Total Users', $totalUsers)
                ->description('All users')
                ->descriptionIcon('heroicon-o-users')
                ->color('primary'),

            Stat::make('Total Products', $totalProducts)
                ->description('All Products')
                ->descriptionIcon('heroicon-o-cube')
                ->color('primary'),

        ];
    }
}
