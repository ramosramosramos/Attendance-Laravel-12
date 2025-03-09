<?php

namespace App\Policies;

use App\Models\Section;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SectionPolicy
{
    public function view(User $user, Section $section): Response
    {
        return $user->id === $section->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Section $section): Response
    {
        return $user->id === $section->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Section $section): Response
    {
        return $user->id === $section->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Section $section): Response
    {
        return $user->id === $section->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Section $section): Response
    {
        return $user->id === $section->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }
}
