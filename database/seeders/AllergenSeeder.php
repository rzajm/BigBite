<?php

namespace Database\Seeders;

use App\Models\Allergen;
use Illuminate\Database\Seeder;

class AllergenSeeder extends Seeder
{
    public function run(): void
    {
        $allergens = [
            1 => 'Gluten',
            2 => 'Crustaceans',
            3 => 'Eggs',
            4 => 'Fish',
            5 => 'Peanuts',
            6 => 'Soybeans',
            7 => 'Milk',
            8 => 'Nuts',
            9 => 'Celery',
            10 => 'Mustard',
            11 => 'Sesame',
            12 => 'Sulphites',
            13 => 'Lupin',
            14 => 'Molluscs',
        ];

        foreach ($allergens as $number => $name) {
            Allergen::create(['number' => $number, 'name' => $name]);
        }
    }
}
