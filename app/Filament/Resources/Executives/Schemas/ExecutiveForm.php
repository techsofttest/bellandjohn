<?php

namespace App\Filament\Resources\Executives\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Validation\Rule;

class ExecutiveForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->schema([
            TextInput::make('name')->required()->maxLength(255),
            TextInput::make('email')->email()->required()->maxLength(255)->unique(ignoreRecord: true),
            TextInput::make('phone')->maxLength(50),
            Select::make('is_active')
                ->options([1 => 'Active', 0 => 'Inactive'])
                ->default(1)
                ->required(),
        ]);
    }
}
