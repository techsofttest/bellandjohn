<?php

namespace App\Filament\Resources\Executives\Pages;

use App\Filament\Resources\Executives\ExecutiveResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListExecutives extends ListRecords
{
    protected static string $resource = ExecutiveResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
