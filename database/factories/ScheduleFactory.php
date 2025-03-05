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
        $date = fake()->date(); // Generate a random date
        $time = fake()->time('H:i:s'); // Generate a random time

        return [
            'user_id' => 1,
            'title' => fake()->sentence(3), // Generate a short title
            'borderColor' => fake()->safeColorName(), // Use `safeColorName()` for realistic colors
            'backgroundColor' => fake()->safeColorName(),
            'textColor' => fake()->safeColorName(),
            'start_time' => Carbon::parse("$date $time")->toDateTimeString(), // Combine date and time
            'end_time' => Carbon::parse("$date $time")->addHours(2)->toDateTimeString(),
            'date' => $date, // Store only the date separately
        ];
    }

}
