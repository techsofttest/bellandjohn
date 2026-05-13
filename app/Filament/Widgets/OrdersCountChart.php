<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

use App\Models\Order;
use Illuminate\Support\Facades\DB;

class OrdersCountChart extends ChartWidget
{
    protected ?string $heading = 'Monthly Orders Count';

    protected static ?int $sort = 2;

    protected function getData(): array
    {
      $data = Order::select(
                DB::raw('MONTH(created_at) as month'),
                DB::raw('COUNT(id) as orders_count')
            )
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderBy('month')
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Orders',
                    'data' => $data->pluck('orders_count'),
                    'borderColor' => '#3b82f6',
                    'backgroundColor' => 'rgba(59,130,246,0.2)',
                    'fill' => true,
                    'tension' => 0.4,
                ],
            ],
            'labels' => $data->pluck('month')->map(fn($m) => date('M', mktime(0,0,0,$m,1))),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
