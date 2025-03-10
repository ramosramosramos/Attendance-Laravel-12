<?php

namespace App\Observers;

use App\Models\Section;
use App\Trait\UserTrait;

class SectionObserver
{
    use UserTrait;
    /**
     * Handle the Section "created" event.
     */
    public function created(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
       $this->forgetSharedProps();
    }

    /**
     * Handle the Section "updated" event.
     */
    public function updated(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
       $this->forgetSharedProps();
    }

    /**
     * Handle the Section "deleted" event.
     */
    public function deleted(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
       $this->forgetSharedProps();
    }

    /**
     * Handle the Section "restored" event.
     */
    public function restored(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
       $this->forgetSharedProps();
    }

    /**
     * Handle the Section "force deleted" event.
     */
    public function forceDeleted(Section $section): void
    {
        request()->session()->put('auth.password_confirmed_at', null);
       $this->forgetSharedProps();
    }
}
