<?php

namespace App\Filament\Resources\Executives;

use App\Filament\Resources\Executives\Pages\CreateExecutive;
use App\Filament\Resources\Executives\Pages\EditExecutive;
use App\Filament\Resources\Executives\Pages\ListExecutives;
use App\Filament\Resources\Executives\Pages\ViewExecutive;
use App\Filament\Resources\Executives\Schemas\ExecutiveForm;
use App\Filament\Resources\Executives\Tables\ExecutivesTable;
use App\Models\Executive;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use UnitEnum;

class ExecutiveResource extends Resource
{
    protected static ?string $model = Executive::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-users';

    protected static ?string $modelLabel = 'Executive';

    protected static ?string $pluralModelLabel = 'Executives';

    protected static ?string $navigationLabel = 'Executives';

    protected static ?int $navigationSort = 6;

    protected static string|UnitEnum|null $navigationGroup = 'CRM';

    public static function form(Schema $schema): Schema
    {
        return ExecutiveForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ExecutivesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListExecutives::route('/'),
            'create' => CreateExecutive::route('/create'),
            'view' => ViewExecutive::route('/{record}'),
            'edit' => EditExecutive::route('/{record}/edit'),
        ];
    }
}
