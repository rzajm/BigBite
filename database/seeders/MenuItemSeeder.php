<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'category_id' => 1,
                'name' => 'Push Doner',
                'slug' => 'push-doner',
                'description' => 'Chicken, cucumber, tomato, onion, parsley & garlic mayo',
                'price' => 2490,
                'emoji' => '🌮',
                'is_featured' => false,
                'allergens' => [8, 1],
                'sort_order' => 1,
            ],
            [
                'category_id' => 1,
                'name' => 'Doner Wrap',
                'slug' => 'doner-wrap',
                'description' => 'Chicken, iceberg, tomato, onion, parsley & garlic mayo in a warm tortilla',
                'price' => 2290,
                'emoji' => '🌮',
                'is_featured' => false,
                'allergens' => [8, 1],
                'sort_order' => 2,
            ],
            [
                'category_id' => 1,
                'name' => 'Doner Box',
                'slug' => 'doner-box',
                'description' => 'Chicken, fries, iceberg, tomato, onion & garlic mayo',
                'price' => 2590,
                'emoji' => '🌮',
                'is_featured' => false,
                'allergens' => [8, 1],
                'sort_order' => 3,
            ],
            [
                'category_id' => 2,
                'name' => 'BigBite Special Burger',
                'slug' => 'bigbite-special-burger',
                'description' => 'Double beef patty, truffle mayo, iceberg, tomato, pickled cucumber, caramelized onion, BigBite special burger sauce',
                'price' => 3290,
                'emoji' => '🍔',
                'is_featured' => true,
                'allergens' => [1, 3, 7, 10],
                'sort_order' => 4,
            ],
            [
                'category_id' => 2,
                'name' => 'Classic Smash Burger',
                'slug' => 'classic-smash-burger',
                'description' => 'Beef patty, American cheese, iceberg, tomato, pickled cucumber, ketchup & mustard',
                'price' => 2490,
                'emoji' => '🍔',
                'is_featured' => true,
                'allergens' => [1, 7, 10],
                'sort_order' => 5,
            ],
            [
                'category_id' => 2,
                'name' => 'BBQ Bacon Burger',
                'slug' => 'bbq-bacon-burger',
                'description' => 'Beef patty, crispy bacon, cheddar, onion rings, BBQ sauce, iceberg',
                'price' => 2990,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 7],
                'sort_order' => 6,
            ],
            [
                'category_id' => 2,
                'name' => 'Chicken Burger',
                'slug' => 'chicken-burger',
                'description' => 'Crispy chicken fillet, iceberg, tomato, mayo, pickled cucumber',
                'price' => 2490,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 3],
                'sort_order' => 7,
            ],
            [
                'category_id' => 2,
                'name' => 'Spicy Jalapeño Burger',
                'slug' => 'spicy-jalapeno-burger',
                'description' => 'Beef patty, pepper jack cheese, jalapeños, spicy mayo, onion, tomato',
                'price' => 2690,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [2],
                'sort_order' => 8,
            ],
            [
                'category_id' => 2,
                'name' => 'Mushroom Swiss Burger',
                'slug' => 'mushroom-swiss-burger',
                'description' => 'Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli, arugula',
                'price' => 2890,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [7, 1],
                'sort_order' => 9,
            ],
            [
                'category_id' => 2,
                'name' => 'Double Trouble Burger',
                'slug' => 'double-trouble-burger',
                'description' => 'Two beef patties, double cheese, bacon, special sauce, lettuce, tomato',
                'price' => 3490,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [1, 7, 3],
                'sort_order' => 10,
            ],
            [
                'category_id' => 2,
                'name' => 'Veggie Burger',
                'slug' => 'veggie-burger',
                'description' => 'Plant-based patty, avocado, tomato, lettuce, vegan mayo',
                'price' => 2690,
                'emoji' => '🍔',
                'is_featured' => false,
                'allergens' => [8, 2, 10, 1],
                'sort_order' => 11,
            ],
            [
                'category_id' => 3,
                'name' => 'Chicken Nuggets & Fries',
                'slug' => 'chicken-nuggets-fries',
                'description' => 'Crispy chicken nuggets served with golden fries',
                'price' => 1990,
                'emoji' => '🍗',
                'is_featured' => false,
                'allergens' => [10],
                'sort_order' => 12,
            ],
            [
                'category_id' => 4,
                'name' => 'Falafel Wrap',
                'slug' => 'falafel-wrap',
                'description' => 'Falafel, arugula, tahini sauce, hummus',
                'price' => 2190,
                'emoji' => '🧆',
                'is_featured' => false,
                'allergens' => [11, 1],
                'sort_order' => 13,
            ],
            [
                'category_id' => 4,
                'name' => 'Falafel Hummus Plate',
                'slug' => 'falafel-hummus-plate',
                'description' => 'Falafel balls, hummus, tabbouleh, pickled vegetables, pita bread',
                'price' => 2490,
                'emoji' => '🥗',
                'is_featured' => false,
                'allergens' => [11, 1],
                'sort_order' => 14,
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
