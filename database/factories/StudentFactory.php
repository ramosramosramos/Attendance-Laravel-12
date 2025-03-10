<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Section;
use App\Models\YearLevel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $courses = Course::all();
        $sections = Section::all();
        $yearLevels = YearLevel::all();

        return [
            'teacher_id' => fake()->randomElement([1, 2]),
            'course_id' => $courses->random()->id,
            'section_id' => $sections->random()->id,
            'year_level_id' => $yearLevels->random()->id,
            'name' => fake()->name(),
            'gender' => fake()->randomElement(['male', 'female']),
            'guardian' => fake()->name(),
            'guardian_phone' => fake()->phoneNumber(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->email(),
            'address_1' => fake()->address(),
            'address_2' => fake()->address(),
            'birth_date' => now()->toDate(),

        ];
    }
}
