<?php

namespace App\Filament\Resources\Executives\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use App\Models\Order;

class ExecutivesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable()->sortable(),
                TextColumn::make('email')->searchable()->sortable(),
                TextColumn::make('phone')->searchable(),
                IconColumn::make('is_active')->boolean()->label('Status'),
                TextColumn::make('assigned_customers')
                    ->label('Assigned Customers')
                    ->state(fn ($record) => $record->assignments()->count()),
                TextColumn::make('assigned_enquiries')
                    ->label('Assigned Enquiries')
                    ->state(fn ($record) => $record->enquiries()->count()),
                TextColumn::make('open_enquiries')
                    ->label('Open Enquiries')
                    ->state(fn ($record) => $record->enquiries()->where('status', 'pending')->count()),
                TextColumn::make('created_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')->dateTime()->sortable()->toggleable(isToggledHiddenByDefault: true),
            ])
            ->recordActions([
                \Filament\Actions\ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
