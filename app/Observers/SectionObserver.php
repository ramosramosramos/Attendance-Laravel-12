<?php

namespace App\Observers;

use App\Models\Section;

class SectionObserver
{
    /**
     * Handle the Section "created" event.
     */
    public function created(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Section "updated" event.
     */
    public function updated(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Section "deleted" event.
     */
    public function deleted(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Section "restored" event.
     */
    public function restored(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }

    /**
     * Handle the Section "force deleted" event.
     */
    public function forceDeleted(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
    }
}
