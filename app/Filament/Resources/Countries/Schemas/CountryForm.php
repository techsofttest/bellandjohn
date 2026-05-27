<?php

namespace App\Filament\Resources\Countries\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;

class CountryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Basic Info')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('name')
                                    ->required(),
                                TextInput::make('code')
                                    ->required()
                                    ->helperText('e.g. KW, AE, SA'),
                            ]),
                        Grid::make(2)
                            ->schema([
                                Toggle::make('is_active')
                                    ->required()
                                    ->default(true),
                                Toggle::make('is_default')
                                    ->label('Is Default')
                                    ->default(false),
                            ]),
                    ]),

                Section::make('Contact Information')
                    ->description('This data is displayed dynamically in the Footer and Contact page based on the selected region.')
                    ->schema([
                        RichEditor::make('address')
                            ->label('Address')
                            ->helperText('Rich text — line breaks are preserved on the frontend.')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline',
                                'bulletList', 'orderedList',
                                'redo', 'undo',
                            ])
                            ->nullable()
                            ->columnSpanFull(),

                        Repeater::make('phone_numbers')
                            ->label('Phone Numbers')
                            ->schema([
                                TextInput::make('number')
                                    ->label('Phone Number')
                                    ->tel()
                                    ->placeholder('+965-224-59082')
                                    ->required(),
                            ])
                            ->addActionLabel('Add Phone Number')
                            ->defaultItems(0)
                            ->collapsible()
                            ->columnSpanFull(),

                        TextInput::make('email_address')
                            ->label('Email Address')
                            ->email()
                            ->placeholder('info@bellandjohn.online')
                            ->nullable()
                            ->columnSpanFull(),

                        RichEditor::make('working_hours')
                            ->label('Working Hours')
                            ->toolbarButtons([
                                'bold', 'italic', 'underline',
                                'bulletList', 'orderedList',
                                'redo', 'undo',
                            ])
                            ->nullable()
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
