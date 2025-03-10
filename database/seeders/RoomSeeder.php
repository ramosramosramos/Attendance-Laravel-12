<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rooms')->insert([
            ['name' => 'Room 1', 'teacher_id' =>1],
            ['name' => 'Room 2', 'teacher_id' =>1],
            ['name' => 'Room 3', 'teacher_id' =>1],
            ['name' => 'Room 4', 'teacher_id' =>1],
            ['name' => 'Room 5', 'teacher_id' =>1],
        ]);
    }
}
