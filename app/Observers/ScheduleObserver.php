<?php

namespace App\Observers;

use App\Models\Schedule;

class ScheduleObserver
{
    /**
     * Handle the Schedule "created" event.
     */
    public function created(Schedule $schedule): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Schedule "updated" event.
     */
    public function updated(Schedule $schedule): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Schedule "deleted" event.
     */
    public function deleted(Schedule $schedule): void
    {

        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Schedule "restored" event.
     */
    public function restored(Schedule $schedule): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Schedule "force deleted" event.
     */
    public function forceDeleted(Schedule $schedule): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }
}
