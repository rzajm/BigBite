<?php

namespace Database\Seeders;

use App\Models\GalleryImage;
use Illuminate\Database\Seeder;

class GalleryImageSeeder extends Seeder
{
    public function run(): void
    {
        $images = [
            ['title' => 'BigBite Special Burger', 'image' => 'gallery/burger-special.jpg', 'category' => 'food', 'sort_order' => 1],
            ['title' => 'Doner Wrap', 'image' => 'gallery/doner-wrap.jpg', 'category' => 'food', 'sort_order' => 2],
            ['title' => 'Falafel Hummus Plate', 'image' => 'gallery/falafel-plate.jpg', 'category' => 'food', 'sort_order' => 3],
            ['title' => 'Restaurant Entrance', 'image' => 'gallery/entrance.jpg', 'category' => 'interior', 'sort_order' => 4],
            ['title' => 'Mezze Plate', 'image' => 'gallery/mezze.jpg', 'category' => 'food', 'sort_order' => 5],
            ['title' => 'Dining Area', 'image' => 'gallery/dining.jpg', 'category' => 'interior', 'sort_order' => 6],
            ['title' => 'BBQ Bacon Burger', 'image' => 'gallery/bbq-burger.jpg', 'category' => 'food', 'sort_order' => 7],
            ['title' => 'Live Music Night', 'image' => 'gallery/live-music.jpg', 'category' => 'events', 'sort_order' => 8],
            ['title' => 'Fresh Ingredients', 'image' => 'gallery/ingredients.jpg', 'category' => 'food', 'sort_order' => 9],
            ['title' => 'Kitchen Counter', 'image' => 'gallery/kitchen.jpg', 'category' => 'interior', 'sort_order' => 10],
            ['title' => 'Opening Celebration', 'image' => 'gallery/opening.jpg', 'category' => 'events', 'sort_order' => 11],
            ['title' => 'Classic Smash Burger', 'image' => 'gallery/smash-burger.jpg', 'category' => 'food', 'sort_order' => 12],
        ];

        foreach ($images as $image) {
            GalleryImage::create($image);
        }
    }
}
