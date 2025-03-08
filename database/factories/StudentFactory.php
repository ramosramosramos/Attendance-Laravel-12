<?php

namespace Database\Factories;

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
        return [
            'teacher_id'=>fake()->randomElement([1,2]),
            'name'=>fake()->name(),
            'gender'=>fake()->randomElement(['male','female']),
            'guardian'=>fake()->name(),
            'guardian_phone'=>fake()->phoneNumber(),
            'phone'=>fake()->phoneNumber(),
            'email'=>fake()->email(),
            'address_1'=>fake()->address(),
            'address_2'=>fake()->address(),
            'year_level'=>'3rd year',
            'course'=>'BSIT',
            'birth_date'=>now()->toDate(),

        ];
    }
}
