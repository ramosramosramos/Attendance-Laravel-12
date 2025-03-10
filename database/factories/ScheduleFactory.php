<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Section;
use App\Models\Subject;
use App\Models\YearLevel;
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
        $courses = Course::all();
        $subjects = Subject::all();
        $sections = Section::all();
        $year_levels = YearLevel::all();

        return [
            'user_id' => fake()->randomElement([1, 2]),
            'course_id' => fake()->randomElement([1, 2, 3]),
            'subject_id' => fake()->randomElement([1, 2, 3]),
            'section_id' => fake()->randomElement([1, 2, 3]),
            'year_level_id' => fake()->randomElement([1, 2, 3]),
            // 'user_id' => fake()->randomElement([1, 2]),
            // 'course_name' => $courses->random()->name,
            // 'subject_name' => $subjects->random()->name,
            // 'section_name' => $sections->random()->name,
            // 'year_level_name' => $year_levels->random()->name,
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
