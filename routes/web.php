<?php

use Illuminate\Support\Facades\Route;

use App\Models\Order;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\Auth\CustomerRegisterController;
use App\Http\Controllers\Auth\CustomerLoginController;
use App\Http\Controllers\Auth\CustomerPasswordController;
use App\Http\Controllers\Customer\WishlistController;
use App\Http\Controllers\Customer\ProfileController;


Route::get('/',[Homecontroller::class,'index'])->name('home');

Route::get('/jewellery',[ProductController::class,'jewellery']);

Route::get('/clothing',[ProductController::class,'clothing']);


Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/faq', [FaqController::class, 'index'])->name('faq');

Route::get('/collections', [ProductController::class, 'collections'])->name('collections');

Route::get('/products', [ProductController::class, 'index'])->name('products');

Route::get('/collections/{category:slug}', [ProductController::class, 'category'])->name('products.category');




Route::get('/products/{slug}', [ProductController::class, 'detail']);

Route::get('/live-search', [ProductController::class, 'liveSearch'])
    ->name('products.live-search');

Route::get('/testimonials', [TestimonialController::class, 'index'])->name('testimonials');

Route::get('/privacy-policy', [ContentController::class, 'privacy']);
Route::get('/terms-and-conditions', [ContentController::class, 'terms']);
Route::get('/return-policy', [ContentController::class, 'return']);
Route::get('/shipping-policy', [ContentController::class, 'shipping']);

//Cart Routes
Route::get('/cart', [CartController::class,'index'])->name('cart.view');

Route::post('/cart/add', [CartController::class,'add'])->name('cart.add');
Route::post('/cart/remove', [CartController::class,'remove'])->name('cart.remove');
Route::post('/cart/update', [CartController::class,'update'])->name('cart.update');

Route::get('/cart/clear', [CartController::class,'clear']); //Debug
//Cart Routes end


Route::get('/checkout', [CheckoutController::class,'index'])->name('checkout.view');

Route::post('/checkout/confirm', [CheckoutController::class,'confirm'])->name('checkout.confirm');

Route::get('/order/summary/{order}', [CheckoutController::class, 'summary'])
    ->name('order.success');



//Customer Routes

// Show register form
Route::get('/register', [CustomerRegisterController::class, 'show'])->name('customer.register');

// Handle form submission
Route::post('/register', [CustomerRegisterController::class, 'register']);


Route::post('/customer/login', [CustomerLoginController::class, 'login'])->name('customer.login');

// Logout
Route::post('/customer/logout', [CustomerLoginController::class, 'logout'])->name('customer.logout');

// Social login
Route::get('/auth/{provider}', [CustomerLoginController::class, 'redirectToProvider'])->name('customer.social.login');
Route::get('/auth/{provider}/callback', [CustomerLoginController::class, 'handleProviderCallback']);


Route::middleware('auth:customer')->group(function () {


    Route::get('/profile', [ProfileController::class, 'index'])->name('customer.profile');


    Route::post('/wishlist/toggle', [WishlistController::class, 'toggle'])
        ->name('wishlist.toggle');
        
    Route::get('/wishlist', [WishlistController::class, 'show'])->name('customer.wishlist');



    Route::get('/addresses', [ProfileController::class, 'addresses'])->name('addresses');

    /*
    Route::get('/addresses/list', [ProfileController::class, 'addressList']);
    Route::post('/addresses/store', [ProfileController::class, 'storeAddress']);
    Route::post('/addresses/update/{id}', [ProfileController::class, 'updateAddress']);
    Route::delete('/addresses/delete/{id}', [ProfileController::class, 'deleteAddress']);
    Route::post('/addresses/default/{id}', [ProfileController::class, 'setDefault']);
    */

    Route::get('/addresses/create', [ProfileController::class, 'create_address'])
    ->name('addresses.create');

    Route::post('/addresses', [ProfileController::class, 'store_address'])
        ->name('addresses.store');


    Route::get('/addresses/{address}/edit', [ProfileController::class, 'edit_address'])
        ->name('addresses.edit');

    Route::put('/addresses/{address}', [ProfileController::class, 'update_address'])
        ->name('addresses.update');

    Route::delete('/addresses/{address}', [ProfileController::class, 'destroy_address'])
        ->name('addresses.destroy');

    Route::post('/addresses/{address}/default', [ProfileController::class, 'setDefault_address'])
        ->name('addresses.default');




    Route::get('/my-orders', [ProfileController::class, 'orders'])
        ->name('customer.orders');

    Route::get('/my-orders/{order}', [ProfileController::class, 'orderDetails'])
        ->name('customer.orderdetail');

    Route::get('/change-password', [CustomerPasswordController::class, 'view'])->name('customer.changepass');
    Route::post('/customer/password/update', [CustomerPasswordController::class, 'update'])->name('customer.password.update');




});


Route::post(
    '/products/{product}/reviews',
    [ProductController::class, 'storeReview']
)->name('products.reviews.store');


//Customer Routes ENd


//Stripe 

Route::get('/stripe/success', [CheckoutController::class, 'stripeSuccess'])
    ->name('stripe.success');

Route::get('/stripe/cancel/{order}', [CheckoutController::class, 'stripeCancel'])
    ->name('stripe.cancel');

//Stripe End



Route::get('/orders/{order}/print', function (Order $order) {
    return view('orders.print', compact('order'));
})->name('orders.print');

use Illuminate\Support\Facades\Artisan;

Route::get('/live', function () {
    Artisan::call('optimize');
    Artisan::call('storage:link');
    return '<h3>✅ Optimized & Linked successfully!</h3>';
});

Route::get('/clear', function () {
    Artisan::call('optimize:clear');
    return '<h3>🧹 Optimization cache cleared!</h3>';
});
