<?php

namespace App\Filament\Resources\Products\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Filament\Tables\Filters\SelectFilter;

class ProductsTable
{
    public static function configure(Table $table,?\Closure $query = null): Table
    {
        $table = $table
            ->columns([
                ImageColumn::make('image')
                    ->circular(),
                TextColumn::make('product_id')
                    ->label('Product ID')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('sku')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('variant_options')
                    ->label('Variants')
                    ->badge()
                    ->getStateUsing(function ($record) {
                        $options = $record->variant_options ?? [];
                        $labels = [];
                        foreach ($options as $group) {
                            if (!empty($group['label'])) {
                                $labels[] = $group['label'];
                            }
                        }
                        return $labels;
                    })
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('brand.name')
                    ->label('Brand')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('category.name')
                    ->label('Category 1')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('subCategory.name')
                    ->label('Category 2')
                    ->sortable()
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('subSubCategory.name')
                    ->label('Category 3')
                    ->sortable()
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('price')
                    ->money('KWD') 
                    ->sortable(),
                ToggleColumn::make('is_active')
                    ->label('Active')
                    ->sortable(),
                ToggleColumn::make('is_featured')
                    ->label('Featured')
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('category')
                    ->relationship('category', 'name'),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);


            if ($query) {
                $table = $table->query($query);
            }


            return $table;
    }
}
