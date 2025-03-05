<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schedule>
 */
class ScheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $number = fake()->numberBetween(1,30);
        $date = fake()->randomElement([now()->addDays($number)]); // Generate a random date

        return [
            'user_id' => 1,
            'title' => fake()->sentence(3),
            'borderColor' => fake()->randomElement(['gray','white','']),
            'backgroundColor' => fake()->randomElement(['indigo','green','red','blue','']),
            'textColor' => 'white',
            'start_time' => Carbon::parse($date)->toDateTimeString(), // Combine date and time
            'end_time' => Carbon::parse($date)->addHours(2)->toDateTimeString(),
            'date' => $date, // Store only the date separately
        ];
    }
}
