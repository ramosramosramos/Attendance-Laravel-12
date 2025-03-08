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
        $number = fake()->numberBetween(1, 30);
        $date = fake()->randomElement([now()->addDays($number)]); // Generate a random date

        return [
            'user_id' => fake()->randomElement([1, 2]),
            'title' => fake()->realText(20),
            'description' => fake()->realText(50),
            'borderColor' => fake()->randomElement(['#ffffff59', '#ffffff', '']),
            'backgroundColor' => fake()->randomElement(['#2200ff', '#0f3b0f', '#d5000f', '#23026e', '']),
            'textColor' => '#ffffff',
            'start_time' => Carbon::parse($date)->toDateTimeString(), // Combine date and time
            'end_time' => Carbon::parse($date)->addHours(2)->toDateTimeString(),
            'date' => $date, // Store only the date separately
        ];
    }
}
