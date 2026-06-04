<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductApiController;
use App\Http\Controllers\Api\CustomerAuthController;
use App\Http\Controllers\Api\OrderApiController;
use App\Http\Controllers\Api\FileController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// File proxy: serves storage files via PHP to handle UTF-8 filenames correctly
Route::get('/file/{path}', [FileController::class, 'serve'])->where('path', '.*');

// Customer Auth APIs
Route::post('/customer/register', [CustomerAuthController::class, 'register']);
Route::post('/customer/login', [CustomerAuthController::class, 'login']);
Route::post('/customer/forgot-password', [CustomerAuthController::class, 'forgotPassword']);
Route::post('/customer/verify-otp', [CustomerAuthController::class, 'verifyOtp']);
Route::post('/customer/reset-password', [CustomerAuthController::class, 'resetPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/customer/me', [CustomerAuthController::class, 'me']);
    Route::post('/customer/logout', [CustomerAuthController::class, 'logout']);
    Route::post('/customer/change-password', [CustomerAuthController::class, 'changePassword']);
});

// Next.js Frontend APIs
Route::get('/categories', [ProductApiController::class, 'categories']);
Route::get('/categories/featured', [ProductApiController::class, 'featuredCategories']);
Route::get('/categories/{slug_or_id}', [ProductApiController::class, 'categoryDetails']);
Route::get('/brands', [ProductApiController::class, 'brands']);
Route::get('/products/suggestions', [ProductApiController::class, 'searchSuggestions']);
Route::get('/products', [ProductApiController::class, 'products']);
Route::get('/products/{slug_or_id}', [ProductApiController::class, 'show']);
Route::get('/settings', [ProductApiController::class, 'settings']);
Route::get('/faqs', [ProductApiController::class, 'faqs']);

// Checkout Submission
Route::post('/orders', [OrderApiController::class, 'store']);
Route::get('/my-requests', [OrderApiController::class, 'myRequests']);

