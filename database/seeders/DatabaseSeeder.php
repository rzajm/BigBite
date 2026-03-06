<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            AllergenSeeder::class,
            CategorySeeder::class,
            MenuItemSeeder::class,
            GalleryImageSeeder::class,
            ReviewSeeder::class,
            ReservationSeeder::class,
        ]);
    }
}
