<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@bigbite.hu',
            'password' => Hash::make('password'),
            'role_id' => 1,
            'is_active' => true,
            'preferred_locale' => 'en',
            'email_verified_at' => now(),
        ]);

        User::create([
            'name' => 'Test User',
            'email' => 'user@bigbite.hu',
            'password' => Hash::make('password'),
            'role_id' => 2,
            'is_active' => true,
            'preferred_locale' => 'en',
            'email_verified_at' => now(),
        ]);
    }
}
