<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('courses')->insert(
            [
                [
                    'name' => 'Bachelor of Information Technology',
                    'code' => 'IT1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Computer Science',
                    'code' => 'CS1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Information Systems',
                    'code' => 'IS1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Arts in Graphic Design',
                    'code' => 'GD1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Business Administration',
                    'code' => 'BA1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Environmental Science',
                    'code' => 'ES1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Mathematics',
                    'code' => 'MATH1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Physics',
                    'code' => 'PHYS1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Chemistry',
                    'code' => 'CHEM1104',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Bachelor of Science in Biology',
                    'code' => 'BIO1104',
                    'teacher_id' => 1,
                ],
            ],
        );
    }
}
