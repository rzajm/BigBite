<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create([
            'name' => 'Doner Variety',
            'slug' => 'doner',
            'description' => 'Authentic doner wraps and plates',
            'emoji' => '🌮',
            'sort_order' => 1,
        ]);

        Category::create([
            'name' => 'Burgers',
            'slug' => 'burgers',
            'description' => 'Handcrafted gourmet burgers',
            'emoji' => '🍔',
            'sort_order' => 2,
        ]);

        Category::create([
            'name' => 'Tasty Bites',
            'slug' => 'tasty-bites',
            'description' => 'Shawarma, quesadilla, wings & more',
            'emoji' => '🍗',
            'sort_order' => 3,
        ]);

        Category::create([
            'name' => 'Vegetarian',
            'slug' => 'vegetarian',
            'description' => 'Fresh plant-based options',
            'emoji' => '🥗',
            'sort_order' => 4,
        ]);

        Category::create([
            'name' => 'Kids Special',
            'slug' => 'kids',
            'description' => 'Tasty meals for little ones',
            'emoji' => '🧒',
            'sort_order' => 5,
        ]);
    }
}
