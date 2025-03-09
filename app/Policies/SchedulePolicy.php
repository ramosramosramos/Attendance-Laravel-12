<?php

namespace App\Policies;

use App\Models\Schedule;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SchedulePolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Schedule $schedule): Response
    {
        return $user->id === $schedule->user_id ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Schedule $schedule): Response
    {
        return $user->id === $schedule->user_id ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Schedule $schedule): Response
    {
        return $user->id === $schedule->user_id ? Response::allow()
            : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Schedule $schedule): Response
    {
        return $user->id === $schedule->user_id ? Response::allow()
            : Response::denyAsNotFound();
    }
}
