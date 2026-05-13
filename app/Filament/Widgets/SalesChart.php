<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class SalesChart extends ChartWidget
{
    protected ?string $heading = 'Monthly Sales Total';

    protected static ?int $sort = 3;

    protected function getData(): array
    {
        $data = Order::select(
                DB::raw('MONTH(created_at) as month'),
                DB::raw('SUM(total) as sales_total')
            )
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderBy('month')
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Sales (₹)',
                    'data' => $data->pluck('sales_total'),
                    'borderColor' => '#10b981',
                    'backgroundColor' => 'rgba(16,185,129,0.2)',
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
