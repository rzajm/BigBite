<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/menu', function () {
    return Inertia::render('Menu');
})->name('menu.index');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/reservations/create', function () {
        return Inertia::render('Reservations/Create');
    })->name('reservations.create');

    Route::get('/reservations', function () {
        return Inertia::render('Reservations/Index');
    })->name('reservations.index');

    Route::get('/reviews', function () {
        return Inertia::render('Reviews/Index');
    })->name('reviews.index');

    Route::get('/reviews/create', function () {
        return Inertia::render('Reviews/Create');
    })->name('reviews.create');
});

require __DIR__.'/auth.php';
