<?php

namespace App\Imports;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Country;
use App\Models\Product;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProductsImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $name = $row['item_name'] ?? null;
            if (!$name) {
                continue; // Skip empty rows
            }

            // Categories
            $categoryId = $this->getCategoryId($row['category_1'] ?? null, null);
            $subCategoryId = $this->getCategoryId($row['category_2'] ?? null, $categoryId);
            $subSubCategoryId = $this->getCategoryId($row['category_3'] ?? null, $subCategoryId);

            // Brand
            $brandId = null;
            if (!empty($row['brand'])) {
                $brand = Brand::firstOrCreate(
                    ['slug' => Str::slug($row['brand'])], 
                    ['name' => $row['brand']]
                );
                $brandId = $brand->id;
            }

            // Variants
            $variantOptions = [];
            $variantColumns = [
                'sizes' => 'Sizes',
                'spine_size' => 'Spine Size',
                'lable_size' => 'Label Size',
                'unit' => 'Unit',
                'quantity' => 'Quantity',
                'capacity' => 'Capacity',
                'type' => 'Type',
                'variant' => 'Variant',
                'pages' => 'Pages',
                'color' => 'Color',
                'tip' => 'Tip',
                'point_size' => 'Point Size',
                'pack_size' => 'Pack Size'
            ];

            foreach ($variantColumns as $col => $label) {
                if (!empty($row[$col])) {
                    $attributes = array_map('trim', explode(',', $row[$col]));
                    $variantOptions[] = [
                        'label' => $label,
                        'attributes' => $attributes,
                    ];
                }
            }
            // Fallback for second type column if exists (type_1)
            if (!empty($row['type_1'])) {
                $attributes = array_map('trim', explode(',', $row['type_1']));
                $variantOptions[] = [
                    'label' => 'Type',
                    'attributes' => $attributes,
                ];
            }

            // Images
            $mainImage = null;
            $additionalImages = [];
            if (!empty($row['image'])) {
                $images = array_map('trim', preg_split('/(?<=\.jpg|\.jpeg|\.png|\.webp|\.gif|\.bmp|\.tiff|\.tif|\.svg|\.jfif|\.heic|\.heif|\.avif)\s*,\s*/i', $row['image']));
                $mainImage = array_shift($images);
                if ($mainImage && !Str::startsWith($mainImage, 'products/')) {
                    $mainImage = 'products/' . $mainImage;
                }
                foreach ($images as $img) {
                    if ($img) {
                        $additionalImages[] = Str::startsWith($img, 'products/') ? $img : 'products/' . $img;
                    }
                }
            }

            // Parse Shipping Disabled/Enabled Methods
            $shippingDisabled = !empty($row['shippingdisabledmethods']) ? array_map('trim', explode(',', $row['shippingdisabledmethods'])) : [];
            $shippingEnabled = !empty($row['shippingenabledmethods']) ? array_map('trim', explode(',', $row['shippingenabledmethods'])) : [];

            $product = Product::updateOrCreate(
                ['sku' => $row['sku'] ?? null],
                [
                    'name' => $name,
                    'slug' => Str::slug($name) . '-' . Str::random(5), // Unique slug
                    'product_id' => $row['product_id'] ?? null,
                    'category_id' => $categoryId,
                    'sub_category_id' => $subCategoryId,
                    'sub_sub_category_id' => $subSubCategoryId,
                    'brand_id' => $brandId,
                    'description' => $row['description'] ?? null,
                    'price' => floatval($row['price'] ?? 0),
                    'is_active' => strtolower($row['enabled'] ?? 'yes') === 'yes',
                    'tax_class_code' => $row['taxclasscode'] ?? 'default',
                    'shipping_freight' => floatval($row['shipping_freight'] ?? 0),
                    'fixed_shipping_rate_only' => strtolower($row['fixed_shipping_rate_only'] ?? 'no') === 'yes',
                    'shipping_type' => $row['shippingtype'] ?? null,
                    'shipping_method_markup' => floatval($row['shippingmethodmarkup'] ?? 0),
                    'shipping_flat_rate' => floatval($row['shippingflatrate'] ?? 0),
                    'shipping_disabled_methods' => $shippingDisabled,
                    'shipping_enabled_methods' => $shippingEnabled,
                    'upc' => $row['upc'] ?? null,
                    'seo_title' => $row['seo_title'] ?? null,
                    'seo_description' => $row['seo_description'] ?? null,
                    'variant_options' => $variantOptions,
                    'image' => $mainImage,
                    'additional_images' => $additionalImages,
                ]
            );

            // Countries
            if (!empty($row['countries'])) {
                $countryNames = array_map('trim', explode(',', $row['countries']));
                $countryIds = [];
                foreach ($countryNames as $countryName) {
                    $country = Country::firstOrCreate(['name' => $countryName], ['code' => strtoupper(substr($countryName, 0, 2))]);
                    $countryIds[] = $country->id;
                }
                $product->countries()->sync($countryIds);
            }
        }
    }

    private function getCategoryId(?string $name, ?int $parentId): ?int
    {
        if (empty($name)) {
            return null;
        }

        $slug = Str::slug($name);
        
        $category = Category::firstOrCreate(
            ['slug' => $slug],
            ['name' => $name, 'parent_id' => $parentId]
        );

        return $category->id;
    }
}
