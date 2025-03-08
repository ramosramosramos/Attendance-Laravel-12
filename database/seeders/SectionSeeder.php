<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sections')->insert([
            [
                'name' => 'A',
                'teacher_id' => 1,
            ],
            [
                'name' => 'B',
                'teacher_id' => 1,
            ],
            [
                'name' => 'C',
                'teacher_id' => 1,
            ],

        ]);
    }
}
