<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TagsInput;
use Filament\Schemas\Components\Grid;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Country;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Utilities\Get;
use Illuminate\Support\Str;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make('Basic Information')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                TextInput::make('name')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (string $operation, $state, $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null),
                                TextInput::make('slug')
                                    ->nullable()
                                    ->unique(ignoreRecord: true),
                                TextInput::make('product_id')
                                    ->label('Product ID')
                                    ->unique(ignoreRecord: true)
                                    ->nullable(),
                            ]),
                        Grid::make(3)
                            ->schema([
                                TagsInput::make('sku')
                                    ->label('SKUs')
                                    ->placeholder('Type SKU and press Enter')
                                    ->required(),
                                TextInput::make('upc')
                                    ->label('UPC')
                                    ->nullable(),
                                Select::make('brand_id')
                                    ->label('Brand')
                                    ->relationship('brand', 'name')
                                    ->searchable()
                                    ->preload()
                                    ->nullable(),
                            ]),
                        Grid::make(3)
                            ->schema([
                                Select::make('category_id')
                                    ->label('Category')
                                    ->options(Category::whereNull('parent_id')->pluck('name', 'id'))
                                    ->required()
                                    ->searchable()
                                    ->preload()
                                    ->live(),
                                
                                Select::make('sub_category_id')
                                    ->label('Sub Category')
                                    ->options(fn (Get $get) => Category::where('parent_id', $get('category_id'))->pluck('name', 'id'))
                                    ->searchable()
                                    ->preload()
                                    ->live(),

                                Select::make('sub_sub_category_id')
                                    ->label('Sub Sub Category')
                                    ->options(fn (Get $get) => Category::where('parent_id', $get('sub_category_id'))->pluck('name', 'id'))
                                    ->searchable()
                                    ->preload()
                                    ->live(),
                            ]),
                        Select::make('countries')
                            ->relationship('countries', 'name')
                            ->multiple()
                            ->searchable()
                            ->preload()
                            ->label('Available in Countries')
                            ->helperText('Select the countries where this product is available'),
                    ]),

                Section::make('Variant Groups')
                    ->description('Define variant options for this product. Add a label (e.g. Color) and its values (e.g. Red, Green, Blue).')
                    ->schema([
                        Repeater::make('variant_options')
                            ->label('Variant Groups')
                            ->schema([
                                TextInput::make('label')
                                    ->label('Variant Label')
                                    ->placeholder('e.g. Color, Size, Material')
                                    ->required(),

                                TagsInput::make('attributes')
                                    ->label('Values')
                                    ->placeholder('Type a value and press Enter (e.g. Red, Green, Blue)')
                                    ->required(),
                            ])
                            ->columns(2)
                            ->itemLabel(fn (array $state): ?string => $state['label'] ?? null)
                            ->collapsible()
                            ->defaultItems(0)
                            ->addActionLabel('Add Variant Group'),
                    ]),

                Section::make('Description')
                    ->schema([
                        RichEditor::make('description')
                            ->default(null)
                            ->columnSpanFull(),
                    ]),

                Section::make('Pricing & Tax')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                TextInput::make('price')
                                    ->numeric()
                                    ->label('Base Price')
                                    ->default(0)
                                    ->required(),
                                TextInput::make('price_strike')
                                    ->numeric()
                                    ->label('Strike Price'),
                                TextInput::make('tax_class_code')
                                    ->label('Tax Class Code')
                                    ->default('default'),
                            ]),
                    ]),

                Section::make('Shipping Information')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('shipping_type')
                                    ->label('Shipping Type')
                                    ->placeholder('e.g. FREE_SHIPPING'),
                                TextInput::make('shipping_freight')
                                    ->numeric()
                                    ->label('Shipping Freight')
                                    ->default(0),
                                Toggle::make('fixed_shipping_rate_only')
                                    ->label('Fixed Shipping Rate Only')
                                    ->default(false),
                                TextInput::make('shipping_method_markup')
                                    ->numeric()
                                    ->label('Shipping Method Markup')
                                    ->default(0),
                                TextInput::make('shipping_flat_rate')
                                    ->numeric()
                                    ->label('Shipping Flat Rate')
                                    ->default(0),
                            ]),
                        Grid::make(2)
                            ->schema([
                                TagsInput::make('shipping_enabled_methods')
                                    ->label('Enabled Shipping Methods'),
                                TagsInput::make('shipping_disabled_methods')
                                    ->label('Disabled Shipping Methods'),
                            ]),
                    ]),

                Section::make('SEO Metadata')
                    ->schema([
                        TextInput::make('seo_title')
                            ->label('SEO Title'),
                        Textarea::make('seo_description')
                            ->label('SEO Description'),
                    ]),



                Section::make('Images & Visibility')
                    ->schema([
                        FileUpload::make('image')
                            ->label('Main Image')
                            ->image()
                            ->directory('products')
                            ->columnSpanFull(),

                        FileUpload::make('additional_images')
                            ->label('Additional Images')
                            ->image()
                            ->multiple()
                            ->directory('products')
                            ->columnSpanFull(),
                        
                        Grid::make(2)
                            ->schema([
                                Toggle::make('is_active')
                                    ->label('Is Active')
                                    ->default(true),
                            ]),

                        CheckboxList::make('featuredCountries')
                            ->relationship('featuredCountries', 'name')
                            ->label('Featured In Countries')
                            ->columns(2)
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
