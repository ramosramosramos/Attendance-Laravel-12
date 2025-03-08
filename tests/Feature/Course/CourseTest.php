<?php

use App\Models\Course;
use App\Models\User;
use Illuminate\Database\QueryException;

it('should be able to view the courses', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get(route('courses.index'));
    $response->assertStatus(200);
});

it('should be able to store a new course', function () {
    $user = User::factory()->create();

    // ✅ Acting as the user and posting the data
    $response = $this->actingAs($user)->post(route('courses.store'), [
        'name' => 'Bachelor of Science and Technology',
        'code' => 'BS1992',
        'teacher_id' => $user->id,
    ]);

    // ✅ Expect a 302 redirect (success)
    $response->assertStatus(200);
    $response->assertSessionHasNoErrors();
    $this->assertDatabaseHas('courses', [

        'name' => 'Bachelor of Science and Technology',
        'code' => 'BS1992',
        'teacher_id' => $user->id,
    ]);
});

it('should be able to throw a unique error of storing an existing course', function () {

    $user = User::factory()->create();

    $course = [
        'name' => 'Bachelor of Science and Technology',
        'code' => 'BS1992',
        'teacher_id' => $user->id,
    ];

    // ✅ First, create the course
    Course::create($course);
    $this->assertDatabaseCount('courses', 1);
    $this->expectException(QueryException::class);
    Course::create($course);
    $this->assertDatabaseCount('courses', 1);
});
it('should be able to update course', function () {

    $user = User::factory()->create();

    $courses = Course::create([
        'name' => 'Bachelor of Science and Technology',
        'code' => 'BS1992',
        'teacher_id' => $user->id,
    ]);
    $response = $this->actingAs($user)->post(route('courses.update', $courses), [
        'name' => 'Bachelor of Science and Technology (updated)',
        'code' => 'BS1992',
        'teacher_id' => $user->id,
    ]);
    $response->assertStatus(200);
    $response->assertSessionHasNoErrors();
    $this->assertDatabaseHas('courses', [
        'name' => 'Bachelor of Science and Technology (updated)',
        'code' => 'BS1992',
        'teacher_id' => $user->id,
    ]);
});

it('should be able to delete a course', function () {
    $user = User::factory()->create();
    $course = Course::create([
        'teacher_id' => $user->id,
        'name' => "Name of Course",
        'code' => "Code of Course",
    ]);

    $response = $this->actingAs($user)->post(route('courses.destroy', $course));
    $response->assertStatus(200);
    $this->assertDatabaseMissing('courses', ['id' => $course->id]);
});
