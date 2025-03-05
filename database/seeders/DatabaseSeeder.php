<?php

namespace Database\Seeders;

use App\Models\Schedule;
use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'admin@gmail.com',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        Schedule::factory(50)->create();
    }
}
