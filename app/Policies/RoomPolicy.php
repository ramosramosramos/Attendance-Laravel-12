<?php

namespace App\Policies;

use App\Models\Room;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class RoomPolicy
{


    /**
     * Determine whether the user can create models.
     */


    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Room $room): Response
    {
       return $user->id == $room->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Room $room): Response
    {
       return $user->id == $room->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Room $room): Response
    {
       return $user->id == $room->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Room $room): Response
    {
       return $user->id == $room->teacher_id ? Response::allow() : Response::denyAsNotFound();
    }
}
