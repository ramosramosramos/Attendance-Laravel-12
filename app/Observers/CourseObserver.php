<?php

namespace App\Observers;

use App\Models\Course;
use App\Trait\UserTrait;

class CourseObserver
{
    use UserTrait;
    /**
     * Handle the Course "created" event.
     */
    public function created(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the Course "updated" event.
     */
    public function updated(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the Course "deleted" event.
     */
    public function deleted(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the Course "restored" event.
     */
    public function restored(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the Course "force deleted" event.
     */
    public function forceDeleted(Course $course): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }
}
