<?php

namespace App\Observers;

use App\Models\Room;

class RoomObserver
{
    /**
     * Handle the Room "created" event.
     */
    public function created(Room $room): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Room "updated" event.
     */
    public function updated(Room $room): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Room "deleted" event.
     */
    public function deleted(Room $room): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Room "restored" event.
     */
    public function restored(Room $room): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }

    /**
     * Handle the Room "force deleted" event.
     */
    public function forceDeleted(Room $room): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        cache()->forget('scheduleProps');
    }
}
