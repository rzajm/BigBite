<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use App\Models\Review;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $featuredItems = MenuItem::with('category', 'allergens')
            ->where('is_featured', true)
            ->where('is_available', true)
            ->orderBy('sort_order')
            ->take(4)
            ->get();

        $reviews = Review::with('user')
            ->where('is_approved', true)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('Home', [
            'featuredItems' => $featuredItems,
            'reviews' => $reviews,
        ]);
    }
}
