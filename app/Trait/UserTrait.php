<?php

namespace App\Trait;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

trait UserTrait
{

    public static function userID()
    {
        return Auth::user()->id;
    }


    public static function getSharedProps( $user )
    {

        return Cache::remember('sharedProps' . $user->id, now()->addHours(24), function () use($user) {
            return [
                'courses' => $user->courses()->select(['id', 'name'])->get(),
                'subjects' => $user->subjects()->select(['id', 'name'])->get(),
                'sections' => $user->sections()->select(['id', 'name'])->get(),
                'year_levels' => $user->yearLevels()->select(['id', 'name'])->get(),
                'rooms' => $user->rooms()->select(['id', 'name'])->get(),
            ];
        });
    }
    public static function forgetSharedProps() {
        Cache::forget('sharedProps' . self::userID());
    }
}
