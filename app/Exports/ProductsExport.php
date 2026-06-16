<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProductsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Product::with([
            'brand',
            'category',
            'subCategory',
            'subSubCategory',
            'countries',
        ])->get()->map(function ($product) {

            $variantOptions = collect($product->variant_options ?? []);

            $getVariantValue = function ($label) use ($variantOptions) {
                $variant = $variantOptions->firstWhere('label', $label);

                if (!$variant || empty($variant['attributes'])) {
                    return '';
                }

                return implode(',', $variant['attributes']);
            };

            $images = [];

            if (!empty($product->image)) {
                $images[] = str_replace('products/', '', $product->image);
            }

            foreach (($product->additional_images ?? []) as $image) {
                $images[] = str_replace('products/', '', $image);
            }

            return [
                'product_id' => $product->product_id,

                'item_name' => $product->name,

                'category_1' => optional($product->category)->name,
                'category_2' => optional($product->subCategory)->name,
                'category_3' => optional($product->subSubCategory)->name,

                'brand' => optional($product->brand)->name,

                'description' => $product->description,

                'price' => $product->price,

                'enabled' => $product->is_active ? 'Yes' : 'No',

                'taxclasscode' => $product->tax_class_code,

                'shipping_freight' => $product->shipping_freight,

                'fixed_shipping_rate_only' =>
                    $product->fixed_shipping_rate_only ? 'Yes' : 'No',

                'shippingtype' => $product->shipping_type,

                'shippingmethodmarkup' => $product->shipping_method_markup,

                'shippingflatrate' => $product->shipping_flat_rate,

                'shippingdisabledmethods' =>
                    implode(',', $product->shipping_disabled_methods ?? []),

                'shippingenabledmethods' =>
                    implode(',', $product->shipping_enabled_methods ?? []),

                'upc' => $product->upc,

                'seo_title' => $product->seo_title,

                'seo_description' => $product->seo_description,

                'sizes' => $getVariantValue('Sizes'),
                'spine_size' => $getVariantValue('Spine Size'),
                'lable_size' => $getVariantValue('Label Size'),
                'unit' => $getVariantValue('Unit'),
                'quantity' => $getVariantValue('Quantity'),
                'capacity' => $getVariantValue('Capacity'),
                'type' => $getVariantValue('Type'),
                'variant' => $getVariantValue('Variant'),
                'pages' => $getVariantValue('Pages'),
                'color' => $getVariantValue('Color'),
                'tip' => $getVariantValue('Tip'),
                'point_size' => $getVariantValue('Point Size'),
                'pack_size' => $getVariantValue('Pack Size'),

                'sku' => implode(',', $product->sku ?? []),

                'image' => implode(',', $images),

                'countries' => $product->countries
                    ->pluck('code')
                    ->implode(','),
            ];
        });
    }

    public function headings(): array
    {
        return [
            'product_id',
            'item_name',

            'category_1',
            'category_2',
            'category_3',

            'brand',

            'description',

            'price',

            'enabled',

            'taxclasscode',

            'shipping_freight',

            'fixed_shipping_rate_only',

            'shippingtype',

            'shippingmethodmarkup',

            'shippingflatrate',

            'shippingdisabledmethods',

            'shippingenabledmethods',

            'upc',

            'seo_title',

            'seo_description',

            'sizes',
            'spine_size',
            'lable_size',
            'unit',
            'quantity',
            'capacity',
            'type',
            'variant',
            'pages',
            'color',
            'tip',
            'point_size',
            'pack_size',

            'sku',

            'image',

            'countries',
        ];
    }
}