<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

// Contact form submission
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

Route::get('/zoho-fields', function () {

    $controller = app(App\Http\Controllers\Api\OrderApiController::class);

    $reflection = new ReflectionClass($controller);
    $method = $reflection->getMethod('getZohoAccessToken');
    $method->setAccessible(true);

    $token = $method->invoke($controller, config('services.zoho'));

    $response = Http::withHeaders([
        'Authorization' => 'Zoho-oauthtoken '.$token,
    ])->get('https://www.zohoapis.com/crm/v8/settings/fields', [
        'module' => 'Leads',
    ]);

    return $response->json();
});