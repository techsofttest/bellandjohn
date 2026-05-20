<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductApiController extends Controller
{
    /**
     * Get all active categories with their full hierarchy, dynamically filtered by region/country.
     */
    public function categories(Request $request)
    {
        // Fetch only active parent categories
        $query = Category::whereNull('parent_id')
            ->where('is_active', true);

        if ($request->filled('country')) {
            $countryVal = $request->input('country');
            $query->whereHas('products', function ($q) use ($countryVal) {
                $q->where('is_active', true)
                  ->whereHas('countries', function ($cq) use ($countryVal) {
                      if (is_numeric($countryVal)) {
                          $cq->where('countries.id', $countryVal);
                      } else {
                          $cq->where('countries.code', $countryVal);
                      }
                  });
            });
        }

        $categories = $query->with(['children' => function ($q) use ($request) {
            $q->where('is_active', true);
            if ($request->filled('country')) {
                $countryVal = $request->input('country');
                $q->whereHas('products', function ($pq) use ($countryVal) {
                    $pq->where('is_active', true)
                      ->whereHas('countries', function ($cq) use ($countryVal) {
                          if (is_numeric($countryVal)) {
                              $cq->where('countries.id', $countryVal);
                          } else {
                              $cq->where('countries.code', $countryVal);
                          }
                      });
                });
            }
            $q->with(['children' => function ($subQuery) use ($request) {
                $subQuery->where('is_active', true);
                if ($request->filled('country')) {
                    $countryVal = $request->input('country');
                    $subQuery->whereHas('products', function ($pq) use ($countryVal) {
                        $pq->where('is_active', true)
                          ->whereHas('countries', function ($cq) use ($countryVal) {
                              if (is_numeric($countryVal)) {
                                  $cq->where('countries.id', $countryVal);
                              } else {
                                  $cq->where('countries.code', $countryVal);
                              }
                          });
                    });
                }
            }]);
        }])->get();

        return response()->json([
            'status' => 'success',
            'data' => $categories
        ]);
    }

    /**
     * Get all active brands.
     */
    public function brands()
    {
        $brands = Brand::orderBy('name')->get();
        return response()->json([
            'status' => 'success',
            'data' => $brands
        ]);
    }

    /**
     * Get products list with filters, search, and sorting.
     */
    public function products(Request $request)
    {
        $query = Product::where('is_active', true)
            ->with(['category', 'subCategory', 'subSubCategory', 'brand']);

        // Filter by Parent Category slug/id
        if ($request->filled('category')) {
            $categoryVal = $request->input('category');
            $query->whereHas('category', function ($q) use ($categoryVal) {
                if (is_numeric($categoryVal)) {
                    $q->where('id', $categoryVal);
                } else {
                    $q->where('slug', $categoryVal);
                }
            });
        }

        // Filter by Sub-Category slug/id
        if ($request->filled('sub_category')) {
            $subCategoryVal = $request->input('sub_category');
            $query->whereHas('subCategory', function ($q) use ($subCategoryVal) {
                if (is_numeric($subCategoryVal)) {
                    $q->where('id', $subCategoryVal);
                } else {
                    $q->where('slug', $subCategoryVal);
                }
            });
        }

        // Filter by Sub-Sub-Category slug/id
        if ($request->filled('sub_sub_category')) {
            $subSubCategoryVal = $request->input('sub_sub_category');
            $query->whereHas('subSubCategory', function ($q) use ($subSubCategoryVal) {
                if (is_numeric($subSubCategoryVal)) {
                    $q->where('id', $subSubCategoryVal);
                } else {
                    $q->where('slug', $subSubCategoryVal);
                }
            });
        }

        // Filter by Brand slug/id
        if ($request->filled('brand')) {
            $brandVal = $request->input('brand');
            $query->whereHas('brand', function ($q) use ($brandVal) {
                if (is_numeric($brandVal)) {
                    $q->where('id', $brandVal);
                } else {
                    $q->where('slug', $brandVal);
                }
            });
        }

        // Filter by Country code/id
        if ($request->filled('country')) {
            $countryVal = $request->input('country');
            $query->whereHas('countries', function ($q) use ($countryVal) {
                if (is_numeric($countryVal)) {
                    $q->where('countries.id', $countryVal);
                } else {
                    $q->where('countries.code', $countryVal);
                }
            });
        }

        // Filter by is_featured
        if ($request->has('featured')) {
            $query->where('is_featured', filter_var($request->input('featured'), FILTER_VALIDATE_BOOLEAN));
        }

        // Search Query
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhereHas('brand', function ($bq) use ($search) {
                      $bq->where('name', 'like', "%{$search}%");
                  });
            });
        }

        // Sorting
        $sort = $request->input('sort', 'newest');
        switch ($sort) {
            case 'newest':
                $query->orderBy('created_at', 'desc')->orderBy('id', 'desc');
                break;
            case 'oldest':
                $query->orderBy('created_at', 'asc')->orderBy('id', 'asc');
                break;
            case 'price-low':
                $query->orderBy('price', 'asc');
                break;
            case 'price-high':
                $query->orderBy('price', 'desc');
                break;
            case 'a-z':
                $query->orderBy('name', 'asc');
                break;
            case 'z-a':
                $query->orderBy('name', 'desc');
                break;
            case 'best-seller':
                $query->orderBy('is_featured', 'desc')->orderBy('created_at', 'desc');
                break;
            default:
                $query->orderBy('id', 'desc');
        }

        // Pagination
        $perPage = $request->input('per_page', 12);
        $products = $query->paginate($perPage);

        return response()->json([
            'status' => 'success',
            'data' => $products->items(),
            'meta' => [
                'current_page' => $products->currentPage(),
                'last_page' => $products->lastPage(),
                'per_page' => $products->perPage(),
                'total' => $products->total(),
            ]
        ]);
    }

    /**
     * Get a single product details by slug or id, along with related products and parent category details.
     */
    public function show($slug_or_id)
    {
        $product = Product::where('is_active', true)
            ->where(function ($query) use ($slug_or_id) {
                if (is_numeric($slug_or_id)) {
                    $query->where('id', $slug_or_id);
                } else {
                    $query->where('slug', $slug_or_id);
                }
            })
            ->with(['category', 'subCategory', 'subSubCategory', 'brand'])
            ->first();

        if (!$product) {
            return response()->json([
                'status' => 'error',
                'message' => 'Product not found'
            ], 404);
        }

        // Fetch related products (same parent category, excluding current product)
        $relatedProducts = Product::where('is_active', true)
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->with(['category', 'brand'])
            ->take(8)
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => $product,
            'related' => $relatedProducts
        ]);
    }

    /**
     * Get full details of a specific category including its child-subcategories and product counts.
     */
    public function categoryDetails($slug_or_id)
    {
        $category = Category::where('is_active', true)
            ->where(function ($query) use ($slug_or_id) {
                if (is_numeric($slug_or_id)) {
                    $query->where('id', $slug_or_id);
                } else {
                    $query->where('slug', $slug_or_id);
                }
            })
            ->with(['children' => function ($q) {
                $q->where('is_active', true)->with(['children' => function ($sq) {
                    $sq->where('is_active', true);
                }]);
            }])
            ->first();

        if (!$category) {
            return response()->json([
                'status' => 'error',
                'message' => 'Category not found'
            ], 404);
        }

        // Format dynamic counts for subcategories & children
        // We will build a tree of counts
        $categoryData = $category->toArray();
        
        // Loop and add count details
        foreach ($categoryData['children'] as &$sub) {
            // Count products directly in this subcategory or recursively under its sub-subcategories
            $subId = $sub['id'];
            $sub['count'] = Product::where('is_active', true)
                ->where('sub_category_id', $subId)
                ->count();
                
            foreach ($sub['children'] as &$subSub) {
                $subSubId = $subSub['id'];
                $subSub['count'] = Product::where('is_active', true)
                    ->where('sub_sub_category_id', $subSubId)
                    ->count();
            }
        }

        return response()->json([
            'status' => 'success',
            'data' => $categoryData
        ]);
    }

    /**
     * Get featured categories filtered by active products in a selected country.
     */
    public function featuredCategories(Request $request)
    {
        $query = Category::where('is_featured', true)
            ->where('is_active', true);

        if ($request->filled('country')) {
            $countryVal = $request->input('country');
            $query->whereHas('products', function ($q) use ($countryVal) {
                $q->where('is_active', true)
                  ->whereHas('countries', function ($cq) use ($countryVal) {
                      if (is_numeric($countryVal)) {
                          $cq->where('countries.id', $countryVal);
                      } else {
                          $cq->where('countries.code', $countryVal);
                      }
                  });
            });
        }

        $categories = $query->get();

        return response()->json([
            'status' => 'success',
            'data' => $categories
        ]);
    }

    /**
     * Get general settings (logo, countries list).
     */
    public function settings()
    {
        $logo = \App\Models\Setting::getValue('logo');
        $logoUrl = $logo ? asset('storage/' . $logo) : asset('logo/logo.png');

        $countries = \App\Models\Country::where('is_active', true)->get()->map(function ($country) {
            return [
                'id' => $country->id,
                'name' => $country->name,
                'code' => $country->code,
                'is_default' => (bool)$country->is_default,
            ];
        });

        return response()->json([
            'status' => 'success',
            'data' => [
                'logo' => $logoUrl,
                'countries' => $countries,
            ]
        ]);
    }
}
