<?php

namespace App\Filament\Resources\Orders\Pages;

use App\Filament\Resources\Orders\OrderResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Section;

class ViewOrder extends ViewRecord
{
    protected static string $resource = OrderResource::class;


    public function getTitle(): string
    {
        return $this->record->order_number ?? 'Order';
    }


    protected function getHeaderActions(): array
    {
        return [
            //EditAction::make(),
        ];
    }

    protected function getFormSchema(): array
    {
        return [
            Forms\Components\Section::make('Order Details')->schema([
                Forms\Components\TextInput::make('order_number')->label('Order Number')->disabled(),
                Forms\Components\TextInput::make('user.name')->label('Customer')->disabled(),
                Forms\Components\TextInput::make('total')->label('Total')->disabled(),
                Forms\Components\TextInput::make('status')->disabled(),
                Forms\Components\TextInput::make('payment_status')->disabled(),
                Forms\Components\Textarea::make('notes')->disabled(),
            ])->columns(2),

            Forms\Components\Section::make('Items')->schema([
                Forms\Components\Repeater::make('items')
                    ->relationship('items')
                    ->schema([
                        Forms\Components\TextInput::make('title')->disabled(),
                        Forms\Components\TextInput::make('quantity')->disabled(),
                        Forms\Components\TextInput::make('price')->disabled(),
                        Forms\Components\TextInput::make('subtotal')->disabled(),
                    ])
                    ->columns(4)
                    ->disableItemCreation()
                    ->disableItemDeletion()
                    ->disableItemMovement(),
            ]),
        ];
    }



}
