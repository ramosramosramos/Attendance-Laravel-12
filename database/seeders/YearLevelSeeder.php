<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YearLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('year_levels')->insert([
            [
                'name' => 'Grade 11',
                'teacher_id'=>1
            ],
            [
                'name' => 'Grade 12',
                'teacher_id'=>1
            ],
            [
                'name' => 'First Year',
                'teacher_id'=>1
            ],
            [
                'name' => 'Second Year',
                'teacher_id'=>1
            ],


        ]);
    }
}
