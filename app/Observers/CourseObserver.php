<?php

namespace App\Observers;

use App\Models\Course;

class CourseObserver
{
    /**
     * Handle the Course "created" event.
     */
    public function created(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Course "updated" event.
     */
    public function updated(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Course "deleted" event.
     */
    public function deleted(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Course "restored" event.
     */
    public function restored(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Course "force deleted" event.
     */
    public function forceDeleted(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }
}
