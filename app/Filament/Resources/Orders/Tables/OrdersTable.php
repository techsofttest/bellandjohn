<?php

namespace App\Filament\Resources\Orders\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\Action;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\ViewRecord;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;

class OrdersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('order_number')->sortable(),
                TextColumn::make('customer_name'),
                TextColumn::make('total')->money('INR'),
                TextColumn::make('payment_status'),
            ])
            ->defaultSort('placed_at', 'desc')
            ->filters([
                 SelectFilter::make('status')
                ->label('Order Status')
                ->options([
                    'pending' => 'Pending',
                    'processing' => 'Processing',
                    'completed' => 'Completed',
                    'cancelled' => 'Cancelled',
                ]),

                SelectFilter::make('payment_status')
                ->label('Payment Status')
                ->options([
                    'pending' => 'Pending',
                    'paid' => 'Paid',
                    'refunded' => 'Refunded',
                    'failed' => 'Failed',
                ]),

                Filter::make('keyword')
                ->form([
                    TextInput::make('keyword')->label('Search Keyword'),
                ])
                ->query(function (Builder $query, array $data) {
                    if (!empty($data['keyword'])) {
                        $query->where('order_number', 'like', "%{$data['keyword']}%")
                              ->orWhere('status', 'like', "%{$data['keyword']}%")
                              ->orWhere('payment_status', 'like', "%{$data['keyword']}%")
                              ->orWhere('shipping_address', 'like', "%{$data['keyword']}%");
                              
                    }
                }),


            ])
            ->recordActions([
                //Action::make('view')
                    //->url(fn ($record) => route('filament.resources.order.view', $record)),
                Action::make('print')
                    ->icon('heroicon-o-printer')
                    ->action(fn ($record) => OrderResource::print($record)),
                ViewAction::make()
            ])
                
            ->toolbarActions([
                
            ]);
    }
}
