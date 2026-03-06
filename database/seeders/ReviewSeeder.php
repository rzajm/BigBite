<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        $reviews = [
            [
                'user_id' => 2,
                'rating' => 5,
                'comment' => 'A legjobb döner a városban! Mindig friss húsok és a szószok isteni ízűek. Nagyon ajánlom mindenkinek!',
                'is_approved' => true,
            ],
            [
                'user_id' => 2,
                'rating' => 4,
                'comment' => 'Nagyon finom hamburgerek és gyors kiszolgálás. Az ár-érték arány kiváló, visszajárunk!',
                'is_approved' => true,
            ],
            [
                'user_id' => 2,
                'rating' => 5,
                'comment' => 'Fantasztikus hely! A Big Bite Burger egyszerűen elképesztő. A személyzet is nagyon kedves és figyelmes.',
                'is_approved' => true,
            ],
            [
                'user_id' => 2,
                'rating' => 4,
                'comment' => 'A vegetáriánus opcióik is kiválóak, nem csak a húsimádókat szolgálják ki. A falafel wrap az egyik kedvencem!',
                'is_approved' => true,
            ],
            [
                'user_id' => 2,
                'rating' => 5,
                'comment' => 'Hétvégi ebédre tökéletes választás. A gyerekmenü is szuper, a kicsik imádják!',
                'is_approved' => true,
            ],
        ];

        foreach ($reviews as $review) {
            Review::create($review);
        }
    }
}
