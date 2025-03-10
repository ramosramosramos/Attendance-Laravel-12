<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        DB::table('subjects')->insert(
            [
                [
                    'name' => 'Math',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'Science',
                    'teacher_id' => 1,
                ],
                [
                    'name' => 'English',
                    'teacher_id' => 1,
                ],

            ]
        );

    }
}
