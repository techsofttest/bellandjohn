<?php

namespace App\Filament\Widgets;

use App\Models\Executive;
use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class EnquiriesOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 2;

    protected function getStats(): array
    {
        return [
            Stat::make('Unassigned Enquiries', Order::whereNull('executive_id')->count())
                ->description('Requests waiting for assignment')
                ->descriptionIcon('heroicon-o-inbox')
                ->color('warning'),
            Stat::make('Enquiries Per Executive', Executive::count())
                ->description('Executives available in CRM')
                ->descriptionIcon('heroicon-o-users')
                ->color('primary'),
            Stat::make('Recently Assigned Customers', Order::whereNotNull('executive_id')->where('updated_at', '>=', now()->subDays(7))->count())
                ->description('Assigned in the last 7 days')
                ->descriptionIcon('heroicon-o-bolt')
                ->color('success'),
        ];
    }
}
