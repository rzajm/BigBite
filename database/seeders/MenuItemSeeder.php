<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    public function run(): void
    {
        // Category IDs: 1=Doner Variety, 2=Burgers, 3=Tasty Bites, 4=Vegetarian, 5=Kids Special
        $items = [
            // === DONER VARIETY (category 1) ===
            [
                'category_id' => 1,
                'name' => 'Push Doner',
                'slug' => 'push-doner',
                'description' => 'Chicken, cucumber, tomato, onion, parsley & garlic mayo',
                'price' => 1700,
                'emoji' => '🌮',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 1,
            ],
            [
                'category_id' => 1,
                'name' => 'Tonton Doner',
                'slug' => 'tonton-doner',
                'description' => 'Chicken, onion, tomato, iceberg, parsley & garlic mayo',
                'price' => 2000,
                'emoji' => '🌮',
                'is_featured' => true,
                'allergens' => [1, 7],
                'sort_order' => 2,
            ],
            [
                'category_id' => 1,
                'name' => 'Doner Wrap',
                'slug' => 'doner-wrap',
                'description' => 'Chicken, cucumber, onion, tomato, parsley & garlic mayo',
                'price' => 1700,
                'emoji' => '🌮',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 3,
            ],
            [
                'category_id' => 1,
                'name' => 'Doner Plate',
                'slug' => 'doner-plate',
                'description' => 'Chicken, cucumber, onion, tomato, parsley & garlic mayo',
                'price' => 2500,
                'emoji' => '🌮',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 4,
            ],

            // === BURGERS (category 2) — all served with fries + sauce ===
            [
                'category_id' => 2,
                'name' => 'BigBite Special Burger',
                'slug' => 'bigbite-special-burger',
                'description' => 'Double beef patty, truffle mayo, iceberg, tomato, pickled cucumber, caramel onion, cheddar cheese & BigBite special burger sauce. Served with fries + sauce.',
                'price' => 2600,
                'emoji' => '🍔',
                'is_featured' => true,
                'allergens' => [1, 3, 7, 10],
                'sort_order' => 5,
            ],
            [
                'category_id' => 2,
                'name' => 'Beef Burger',
                'slug' => 'beef-burger',
                'description' => 'Beef patty, fresh tomato, onion, iceberg, pickle cucumber, cheese & classic burger sauce. Served with fries + sauce.',
                'price' => 2000,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 3, 7, 10],
                'sort_order' => 6,
            ],
            [
                'category_id' => 2,
                'name' => 'Doner Burger',
                'slug' => 'doner-burger',
                'description' => 'Special doner chicken, garlic mayo, tomato, onion, iceberg. Served with fries + sauce.',
                'price' => 1900,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 7,
            ],
            [
                'category_id' => 2,
                'name' => 'Bar.BQ Burger',
                'slug' => 'barbq-burger',
                'description' => 'Beef patty, tomato, onion, iceberg & BBQ sauce. Served with fries + sauce.',
                'price' => 2200,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 7, 10],
                'sort_order' => 8,
            ],
            [
                'category_id' => 2,
                'name' => 'Double Cheese Burger',
                'slug' => 'double-cheese-burger',
                'description' => 'Double beef patty, fresh tomato, onion, iceberg, pickle cucumber & hamburger sauce. Served with fries + sauce.',
                'price' => 2200,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 3, 7, 10],
                'sort_order' => 9,
            ],
            [
                'category_id' => 2,
                'name' => 'Chicken Burger',
                'slug' => 'chicken-burger',
                'description' => 'Chicken patty, fresh tomato, onion, iceberg & mayonnaise. Served with fries + sauce.',
                'price' => 1800,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 3, 7],
                'sort_order' => 10,
            ],

            // === TASTY BITES (category 3) ===
            [
                'category_id' => 3,
                'name' => 'Chicken Shawarma',
                'slug' => 'chicken-shawarma',
                'description' => 'Chicken, fries, pickled cucumber, garlic mayo',
                'price' => 1800,
                'emoji' => '🌯',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 11,
            ],
            [
                'category_id' => 3,
                'name' => 'Chicken Quesadilla',
                'slug' => 'chicken-quesadilla',
                'description' => 'Chicken, cheese, sweet corn, jalapeño & BBQ sauce',
                'price' => 1600,
                'emoji' => '🫔',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 12,
            ],
            [
                'category_id' => 3,
                'name' => 'BBQ Wings',
                'slug' => 'bbq-wings',
                'description' => 'Fresh chicken wings, BBQ sauce, onion. Served with rice or fries.',
                'price' => 1400,
                'emoji' => '🍗',
                'is_featured' => true,
                'allergens' => [1],
                'sort_order' => 13,
            ],
            [
                'category_id' => 3,
                'name' => 'BB Club Sandwich',
                'slug' => 'bb-club-sandwich',
                'description' => 'Mayonnaise, iceberg, tomato, egg, ham & chicken',
                'price' => 1800,
                'emoji' => '🥪',
                'is_featured' => false,
                'allergens' => [1, 3, 7],
                'sort_order' => 14,
            ],
            [
                'category_id' => 3,
                'name' => 'Ham & Cheese Toast',
                'slug' => 'ham-cheese-toast',
                'description' => 'Ham, cheese, toast bread',
                'price' => 800,
                'emoji' => '🧀',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 15,
            ],

            // === VEGETARIAN (category 4) ===
            [
                'category_id' => 4,
                'name' => 'Falafel Wrap',
                'slug' => 'falafel-wrap',
                'description' => 'Falafel, rucola, tahini sauce, hummus',
                'price' => 1400,
                'emoji' => '🧆',
                'is_featured' => false,
                'allergens' => [1, 11],
                'sort_order' => 16,
            ],
            [
                'category_id' => 4,
                'name' => 'Falafel Hummus Plate',
                'slug' => 'falafel-hummus-plate',
                'description' => 'Homemade hummus, falafel, fresh vegetables, homemade bread',
                'price' => 1900,
                'emoji' => '🥗',
                'is_featured' => false,
                'allergens' => [1, 11],
                'sort_order' => 17,
            ],
            [
                'category_id' => 4,
                'name' => 'Mezze Plate',
                'slug' => 'mezze-plate',
                'description' => 'Haydari, hummus, paprika hummus, falafel served with fresh vegetables & pita',
                'price' => 2000,
                'emoji' => '🥙',
                'is_featured' => true,
                'allergens' => [1, 7, 11],
                'sort_order' => 18,
            ],

            // === KIDS SPECIAL (category 5) ===
            [
                'category_id' => 5,
                'name' => 'Chicken Nuggets & Fries',
                'slug' => 'chicken-nuggets-fries',
                'description' => 'Crispy chicken nuggets served with golden fries',
                'price' => 1000,
                'emoji' => '🍟',
                'is_featured' => false,
                'allergens' => [1, 3],
                'sort_order' => 19,
            ],
        ];

        foreach ($items as $itemData) {
            $allergens = $itemData['allergens'];
            unset($itemData['allergens']);

            $item = MenuItem::create($itemData);

            $allergenIds = \App\Models\Allergen::whereIn('number', $allergens)->pluck('id')->toArray();
            $item->allergens()->attach($allergenIds);
        }
    }
}
