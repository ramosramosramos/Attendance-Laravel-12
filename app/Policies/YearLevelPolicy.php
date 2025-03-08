<?php

namespace App\Policies;

use App\Models\User;
use App\Models\YearLevel;
use Illuminate\Auth\Access\Response;

class YearLevelPolicy
{
    /**
     * Determine whether the user can view any models.
     */

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, YearLevel $yearLevel): Response
    {
        return  $user->id === $yearLevel->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
 
     * Determine whether the user can update the model.
     */
    public function update(User $user, YearLevel $yearLevel): Response
    {
        return  $user->id === $yearLevel->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, YearLevel $yearLevel): Response
    {
        return  $user->id === $yearLevel->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, YearLevel $yearLevel): Response
    {
        return  $user->id === $yearLevel->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, YearLevel $yearLevel): Response
    {
        return  $user->id === $yearLevel->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }
}
