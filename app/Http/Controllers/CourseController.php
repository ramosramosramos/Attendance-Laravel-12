<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('course/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        Course::create(array_merge($request->validated(), [
            'teacher_id' => $this->user()->id,
        ]));

    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $course->update(array_merge($request->validated(), [
            'teacher_id' => $this->user()->id,
        ]));
    }

    public function destroy(Course $course)
    {
        $course->deleteOrFail();
    }
}
