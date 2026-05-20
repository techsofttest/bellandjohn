<?php

namespace App\Filament\Resources\Orders;

use App\Filament\Resources\Orders\Pages;

use App\Filament\Resources\Orders\Pages\CreateOrder;
use App\Filament\Resources\Orders\Pages\EditOrder;
use App\Filament\Resources\Orders\Pages\ListOrders;
use App\Filament\Resources\Orders\Schemas\OrderForm;
use App\Filament\Resources\Orders\Tables\OrdersTable;
use App\Models\Order;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Tables\Table;
use UnitEnum;
use Illuminate\Database\Eloquent\Builder;
use Filament\Forms\Components\TextInput;
use Filament\Forms;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\View;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $recordTitleAttribute = 'order_number';

    protected static ?string $modelLabel = 'Request';
    
    protected static ?string $pluralModelLabel = 'Requests';
    
    protected static ?string $navigationLabel = 'Requests';

     protected static ?int $navigationSort = 5;

    protected static string|UnitEnum|null $navigationGroup = 'Ecommerce';


    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->with(['customer', 'items']);

    }


    public static function form(Schema $schema): Schema
    {

       return $schema->schema([

        // Request Details Section
        Section::make('Request Details')->schema([
            TextInput::make('order_number')->label('Request Number')->disabled(),
            TextInput::make('status')->label('Status')->disabled(),
            TextInput::make('subtotal')->label('Subtotal Amount')->disabled(),
            TextInput::make('total')->label('Total Amount')->disabled(),
            TextInput::make('currency')->disabled(),
            TextInput::make('placed_at')->label('Submitted At')->disabled(),
        ])->columnSpanFull(),

        // Customer Info Section
        Section::make('Customer Info')->schema([
           
        ])->columnSpanFull(),

        // Address
        Section::make('Address')->schema([
            KeyValue::make('shipping_address')->label('Address Details')->disabled(),
        ])->columnSpanFull(),

        // Notes
        Section::make('Notes')->schema([
            Textarea::make('notes')->disabled(),
        ])->columnSpanFull(),

        // Order Items
        Section::make('Items')->schema([
            Repeater::make('items')
                ->relationship('items')
                ->columns(6)
                ->schema([
                    TextInput::make('title')->disabled(),
                    TextInput::make('quantity')->disabled(),
                    TextInput::make('price')->disabled(),
                    TextInput::make('subtotal')->disabled(),
                    TextInput::make('tax')->disabled(),
                    TextInput::make('total')->disabled(),
                ])
                ->disableItemCreation()
                ->disableItemDeletion()
                ->disableItemMovement(),
        ])->columnSpanFull(),

    ]);

    }


    public static function canView($record): bool
    {
        return true;
    }

     public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit($record): bool
    {
        return false;
    }

    public static function canDelete($record): bool
    {
        return false; 
    }


    public static function table(Table $table): Table
    {
        return OrdersTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            //'view'  => Pages\ViewOrder::route('/{record}'),
            'view'  => Pages\OrderDetail::route('/{record}'),
        ];
    }
}
