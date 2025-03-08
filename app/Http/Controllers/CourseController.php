<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

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
        Course::create($request->validated());
    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $course->update($request->validated());
    }

    public function destroy(Course $course)
    {
        $course->deleteOrFail();
    }
}
