<?php

namespace App\Http\Controllers;

use App\Models\Allergen;
use App\Models\Category;
use App\Models\MenuItem;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $categories = Category::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        $menuItems = MenuItem::with('category', 'allergens')
            ->where('is_available', true)
            ->where('status', 'active')
            ->orderBy('sort_order')
            ->get();

        $allergens = Allergen::orderBy('number')->get();

        return Inertia::render('Menu', [
            'categories' => $categories,
            'menuItems' => $menuItems,
            'allergens' => $allergens,
        ]);
    }

    public function show(MenuItem $menuItem)
    {
        $menuItem->load('category', 'allergens');

        $relatedItems = MenuItem::with('category')
            ->where('category_id', $menuItem->category_id)
            ->where('id', '!=', $menuItem->id)
            ->where('is_available', true)
            ->where('status', 'active')
            ->limit(4)
            ->get();

        return Inertia::render('Menu/Show', [
            'menuItem' => $menuItem,
            'relatedItems' => $relatedItems,
        ]);
    }
}
