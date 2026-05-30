<?php

namespace App\Filament\Resources\Categories\Pages;

use App\Filament\Resources\Categories\CategoryResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Category;

class ListCategories extends ListRecords
{
    protected static string $resource = CategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        $tabs = [
            'all' => Tab::make('All Categories')
                ->modifyQueryUsing(fn (Builder $query) => $query->whereNull('parent_id')),
        ];

        $parentCategories = Category::whereNull('parent_id')->orderBy('name')->get();

        foreach ($parentCategories as $category) {
            $tabs['category_' . $category->id] = Tab::make($category->name)
                ->modifyQueryUsing(fn (Builder $query) => $query->where('parent_id', $category->id));
        }

        return $tabs;
    }
}
