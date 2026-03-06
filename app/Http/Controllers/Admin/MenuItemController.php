<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Allergen;
use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MenuItemController extends Controller
{
    public function index()
    {
        $menuItems = MenuItem::with('category', 'allergens')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Admin/MenuItems/Index', [
            'menuItems' => $menuItems,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/MenuItems/Create', [
            'categories' => Category::orderBy('sort_order')->get(),
            'allergens' => Allergen::orderBy('number')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|integer|min:0',
            'emoji' => 'nullable|string|max:10',
            'calories' => 'nullable|integer|min:0',
            'preparation_time' => 'nullable|integer|min:0',
            'is_featured' => 'boolean',
            'is_available' => 'boolean',
            'status' => 'required|in:active,inactive,seasonal',
            'sort_order' => 'integer|min:0',
            'image' => 'nullable|image|max:2048',
            'allergens' => 'nullable|array',
            'allergens.*' => 'exists:allergens,id',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('menu-items', 'public');
        }

        $allergens = $validated['allergens'] ?? [];
        unset($validated['allergens']);

        $item = MenuItem::create($validated);
        $item->allergens()->sync($allergens);

        return redirect()->route('admin.menu-items.index')
            ->with('success', 'Menu item created successfully!');
    }

    public function edit(MenuItem $menuItem)
    {
        $menuItem->load('allergens');

        return Inertia::render('Admin/MenuItems/Edit', [
            'menuItem' => $menuItem,
            'categories' => Category::orderBy('sort_order')->get(),
            'allergens' => Allergen::orderBy('number')->get(),
        ]);
    }

    public function update(Request $request, MenuItem $menuItem)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|integer|min:0',
            'emoji' => 'nullable|string|max:10',
            'calories' => 'nullable|integer|min:0',
            'preparation_time' => 'nullable|integer|min:0',
            'is_featured' => 'boolean',
            'is_available' => 'boolean',
            'status' => 'required|in:active,inactive,seasonal',
            'sort_order' => 'integer|min:0',
            'image' => 'nullable|image|max:2048',
            'allergens' => 'nullable|array',
            'allergens.*' => 'exists:allergens,id',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('menu-items', 'public');
        }

        $allergens = $validated['allergens'] ?? [];
        unset($validated['allergens']);

        $menuItem->update($validated);
        $menuItem->allergens()->sync($allergens);

        return redirect()->route('admin.menu-items.index')
            ->with('success', 'Menu item updated successfully!');
    }

    public function destroy(MenuItem $menuItem)
    {
        $menuItem->delete();

        return redirect()->route('admin.menu-items.index')
            ->with('success', 'Menu item deleted.');
    }
}
