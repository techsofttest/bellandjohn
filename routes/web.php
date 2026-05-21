<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

// Contact form submission
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

