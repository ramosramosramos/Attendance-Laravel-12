<?php

namespace Database\Seeders;

use App\Models\Schedule;
use App\Models\Student;
use App\Models\User;
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
            'name' => 'First User',
            'email' => 'admin1@gmail.com',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
        User::factory()->create([
            'name' => 'Second User',
            'email' => 'admin2@gmail.com',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        Schedule::factory(10)->create();
        Student::factory(10)->create();

        $this->call([
            CourseSeeder::class,
            SubjectSeeder::class,
            SectionSeeder::class,
            YearLevelSeeder::class,
        ]);
    }
}
