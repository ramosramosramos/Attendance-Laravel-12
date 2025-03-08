<?php

namespace App\Policies;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SubjectPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Subject $subject): Response
    {
        return $user->id === $subject->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }


    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Subject $subject): Response
    {
        return $user->id === $subject->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Subject $subject): Response
    {
        return $user->id === $subject->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Subject $subject): Response
    {
        return $user->id === $subject->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Subject $subject): Response
    {
        return $user->id === $subject->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }
}
