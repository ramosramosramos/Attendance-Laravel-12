<?php

namespace App\Observers;

use App\Models\Subject;
use App\Trait\UserTrait;

class SubjectObserver
{
    use UserTrait;
    /**
     * Handle the Subject "created" event.
     */

    public function created(Subject $subject): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
      $this->forgetSharedProps();
    }

    /**
     * Handle the Subject "updated" event.
     */
    public function updated(Subject $subject): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
      $this->forgetSharedProps();
    }

    /**
     * Handle the Subject "deleted" event.
     */
    public function deleted(Subject $subject): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
      $this->forgetSharedProps();
    }

    /**
     * Handle the Subject "restored" event.
     */
    public function restored(Subject $subject): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
      $this->forgetSharedProps();
    }

    /**
     * Handle the Subject "force deleted" event.
     */
    public function forceDeleted(Subject $subject): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
      $this->forgetSharedProps();
    }
}
