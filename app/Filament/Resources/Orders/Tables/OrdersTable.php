<?php

namespace App\Filament\Resources\Orders\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\Action;
use App\Models\Executive;
use App\Models\EnquiryExecutiveAssignment;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Actions\ViewAction;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\Orders\OrderResource;

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
                TextColumn::make('country')
                    ->label('Country')
                    ->badge()
                    ->color('info')
                    ->sortable(),
                TextColumn::make('executive.name')
                    ->label('Executive')
                    ->badge()
                    ->state(fn ($record) => $record->executive?->name ?? 'Unassigned')
                    ->color(fn ($state) => $state === 'Unassigned' ? 'gray' : 'success'),
                TextColumn::make('items_count')
                    ->label('Total Items')
                    ->counts('items'),
            ])
            ->defaultSort('placed_at', 'desc')
            ->filters([
                SelectFilter::make('assignment_status')
                    ->label('Assignment Status')
                    ->options([
                        'assigned' => 'Assigned',
                        'unassigned' => 'Unassigned',
                    ])
                    ->query(function (Builder $query, array $data) {
                        if (($data['value'] ?? null) === 'assigned') {
                            $query->whereNotNull('executive_id');
                        }
                        if (($data['value'] ?? null) === 'unassigned') {
                            $query->whereNull('executive_id');
                        }
                    }),
                SelectFilter::make('executive_id')
                    ->label('Executive')
                    ->options(fn () => Executive::where('is_active', true)->orderBy('name')->pluck('name', 'id')->all())
                    ->searchable(),
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
                Action::make('assignExecutive')
                    ->label('Assign Executive')
                    ->icon('heroicon-o-user-plus')
                    ->form([
                        TextInput::make('customer_email')
                            ->label('Customer Email')
                            ->disabled()
                            ->dehydrated(false),
                        Select::make('executive_id')
                            ->label('Executive')
                            ->options(fn () => Executive::where('is_active', true)->orderBy('name')->pluck('name', 'id')->all())
                            ->required()
                            ->searchable(),
                        Toggle::make('apply_to_existing_requests')
                            ->label('Apply To Existing Requests')
                            ->default(true),
                    ])
                    ->fillForm(fn ($record) => [
                        'customer_email' => $record->customer_email,
                        'executive_id' => $record->executive_id,
                        'apply_to_existing_requests' => true,
                    ])
                    ->action(function (array $data, $record) {
                        $email = $record->customer_email;

                        if (! $email) {
                            return;
                        }

                        EnquiryExecutiveAssignment::updateOrCreate(
                            ['customer_email' => $email],
                            ['executive_id' => $data['executive_id']]
                        );

                        if (!empty($data['apply_to_existing_requests'])) {
                            \App\Models\Order::where('customer_email', $email)
                                ->update(['executive_id' => $data['executive_id']]);
                        }
                    })
                    ->modalHeading('Assign Executive'),
                Action::make('print')
                    ->icon('heroicon-o-printer')
                    ->action(fn ($record) => OrderResource::print($record)),
                ViewAction::make()
            ])
                
            ->toolbarActions([
                
            ]);
    }
}
