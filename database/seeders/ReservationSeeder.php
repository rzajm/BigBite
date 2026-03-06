<?php

namespace Database\Seeders;

use App\Models\Reservation;
use Illuminate\Database\Seeder;

class ReservationSeeder extends Seeder
{
    public function run(): void
    {
        $reservations = [
            [
                'user_id' => 2,
                'guest_name' => 'Test User',
                'guest_email' => 'user@bigbite.hu',
                'guest_phone' => '+36 30 123 4567',
                'date' => now()->addDays(3)->format('Y-m-d'),
                'time' => '18:00',
                'party_size' => 4,
                'status' => 'pending',
                'special_requests' => 'Ablak melletti asztalt szeretnénk, ha lehetséges.',
            ],
            [
                'user_id' => 2,
                'guest_name' => 'Test User',
                'guest_email' => 'user@bigbite.hu',
                'guest_phone' => '+36 30 123 4567',
                'date' => now()->addDays(7)->format('Y-m-d'),
                'time' => '19:30',
                'party_size' => 2,
                'status' => 'confirmed',
                'special_requests' => null,
            ],
            [
                'user_id' => 2,
                'guest_name' => 'Test User',
                'guest_email' => 'user@bigbite.hu',
                'guest_phone' => '+36 30 123 4567',
                'date' => now()->subDays(5)->format('Y-m-d'),
                'time' => '12:00',
                'party_size' => 6,
                'status' => 'cancelled',
                'special_requests' => 'Születésnapi ünneplés, kérünk egy kis tortagyertyát is!',
            ],
        ];

        foreach ($reservations as $reservation) {
            Reservation::create($reservation);
        }
    }
}
