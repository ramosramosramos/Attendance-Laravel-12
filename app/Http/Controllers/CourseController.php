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

        $courses = $this->user()->courses()->select(['id', 'name', 'code', 'teacher_id'])
            ->get();
        $this->authorize('view', $courses->first());
        return inertia('course/index', [
            'courses' => $courses->map(function ($course) {
                return [
                    'id' => $course->id,
                    'name' => $course->name,
                    'code' => $course->code,
                    'teacher_id' => $course->teacher_id,
                    'updateURL' => route("courses.update", $course->id),
                    'deleteURL' => route("courses.destroy", $course->id),
                ];
            }),
        ]);
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
        $this->authorize('update', $course);
        $course->update(array_merge($request->validated(), [
            'teacher_id' => $this->user()->id,
        ]));
    }

    public function destroy(Course $course)
    {
        $this->authorize('delete', $course);
        $course->deleteOrFail();

    }
}
