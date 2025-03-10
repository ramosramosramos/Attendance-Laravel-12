<?php

namespace App\Observers;

use App\Models\YearLevel;
use App\Trait\UserTrait;

class YearLevelObserver
{
    use UserTrait;
    /**
     * Handle the YearLevel "created" event.
     */
    public function created(YearLevel $yearLevel): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the YearLevel "updated" event.
     */
    public function updated(YearLevel $yearLevel): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the YearLevel "deleted" event.
     */
    public function deleted(YearLevel $yearLevel): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the YearLevel "restored" event.
     */
    public function restored(YearLevel $yearLevel): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }

    /**
     * Handle the YearLevel "force deleted" event.
     */
    public function forceDeleted(YearLevel $yearLevel): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
        $this->forgetSharedProps();
    }
}
