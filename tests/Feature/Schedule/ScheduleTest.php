<?php

use App\Models\Schedule;
use App\Models\User;

it("shoud be able to visit the schedule page", function () {
    $response = $this->get(route('schedules.index'));
    $response->assertStatus(302);
});

it('should be able to create a new schedule', function () {
    $response = $this->get(route('schedules.create'));
    $response->assertStatus(302);
});

it('should be able to store a new schedule', function () {

    $user = User::factory()->create();
    $schedule = [
        'user_id' => $user->id,
        'title' => 'Room 101',
        'description' => 'description',
        'start_time' => now()->addHours(2)->toDateTimeString(),
        'end_time' => now()->addHours(10)->toDateTimeString(),
        'date' => now()->format('Y-m-d'),
    ];

    $response = $this->actingAs($user)->post(route('schedules.store', $schedule));

    $this->assertDatabasehas('schedules', $schedule);
});
it('should be able to update a  schedule', function () {

    $user = User::factory()->create();
    $schedule = Schedule::factory()->create([
        'user_id' => $user->id,
        'title' => 'Room 101',
        'description' => 'description',
        'start_time' => now()->addHours(1)->toDateTimeString(),
        'end_time' => now()->addHours(9)->toDateTimeString(),
        'date' => now()->format('Y-m-d'),
    ]);

    $updatedData = [
        'user_id' => $user->id,
        'title' => 'Room 102',
        'description' => 'new description',
        'start_time' => now()->addHours(3)->toDateTimeString(),
        'end_time' => now()->addHours(12)->toDateTimeString(),
        'date' => now()->format('Y-m-d'),
    ];
    $response = $this->actingAs($user)->post(route('schedules.update', $schedule->id), $updatedData);
    $response->assertOk(); // Ensure redirect is correct
    // Ensure the database has the updated values
    $this->assertDatabaseHas('schedules', array_merge(['id' => $schedule->id], $updatedData));
});

it('should be able to edit a schedule',function(){
    $user = User::factory()->create();
    $schedule = Schedule::factory()->create([
        'user_id' => $user->id,
        'title' => 'Room 101',
        'description' => 'description',
        'start_time' => now()->addHours(1)->toDateTimeString(),
        'end_time' => now()->addHours(9)->toDateTimeString(),
        'date' => now()->format('Y-m-d'),
    ]);
    $response = $this->get(route('schedules.edit', $schedule->id));

    $response->assertStatus(302);

});
it('should be able to drag date of a  schedule', function () {

    $user = User::factory()->create();
    $schedule = Schedule::factory()->create([
        'user_id' => $user->id,
        'title' => 'Room 101',
        'description' => 'description',
        'start_time' => now()->addHours(1)->toDateTimeString(),
        'end_time' => now()->addHours(9)->toDateTimeString(),
        'date' => now()->format('Y-m-d'),
    ]);

    $updatedData = [
        'user_id' => $user->id,
        'title' => $schedule->title,
        'description' => $schedule->description,
        'start_time' => now()->addHours(3)->toDateTimeString(),
        'end_time' => $schedule->end_time,
        'date' => now()->format('Y-m-d'),
    ];
    $response = $this->actingAs($user)->post(route('schedules.update', $schedule->id), $updatedData);
    $response->assertOk(); // Ensure redirect is correct
    // Ensure the database has the updated values
    $this->assertDatabaseHas('schedules', array_merge(['id' => $schedule->id], $updatedData));

});

it('should delete a schedule', function(){

    $user = User::factory()->create();

    $schedule = Schedule::create([
        'user_id' => $user->id,
        'title' => 'Room 101',
        'description' => 'description',
        'start_time' => now()->addHours(1)->toDateTimeString(),
        'end_time' => now()->addHours(9)->toDateTimeString(),
        'date' => now()->format('Y-m-d'),
    ]);

    $response = $this->actingAs($user)->post(route('schedules.destroy',$schedule->id));

    $response->assertOk();


    $this->assertDatabaseHas('schedules',[
        'id'=>$schedule->id,

    ]);
    $this->assertNotNull($schedule->fresh()->deleted_at);
});
