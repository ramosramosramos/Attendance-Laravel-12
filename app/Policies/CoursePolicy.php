<?php

namespace App\Policies;

use App\Models\Course;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CoursePolicy
{
    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Course $course): Response
    {
        return $user->id == $course->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    public function update(User $user, Course $course): Response
    {
        return $user->id == $course->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Course $course): Response
    {
        return $user->id == $course->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Course $course): Response
    {
        return $user->id == $course->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Course $course): Response
    {
        return $user->id == $course->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }
}
