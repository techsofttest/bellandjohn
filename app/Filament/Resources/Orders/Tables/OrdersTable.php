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
                TextColumn::make('placed_at')
                    ->label('Date & Time')
                    ->dateTime('M j, Y g:i A')
                    ->sortable(),
                TextColumn::make('order_number')
                    ->label('Request Number')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('customer_name')
                    ->label('Name')
                    ->state(fn ($record) => trim(($record->shipping_address['first_name'] ?? '') . ' ' . ($record->shipping_address['last_name'] ?? '')) ?: ($record->customer_name ?? ''))
                    ->searchable(),
                TextColumn::make('shipping_address')
                    ->label('Address')
                    ->state(fn ($record) => $record->shipping_address['address'] ?? '')
                    ->limit(45),
                TextColumn::make('items_count')
                    ->label('Total Items')
                    ->counts('items'),
            ])
            ->defaultSort('placed_at', 'desc')
            ->filters([
                 SelectFilter::make('status')
                ->label('Request Status')
                ->options([
                    'pending' => 'Pending',
                    'processing' => 'Processing',
                    'completed' => 'Completed',
                    'cancelled' => 'Cancelled',
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
