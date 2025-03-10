<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rooms = $this->user()->rooms()->select(['id', 'name', 'teacher_id'])->get()->map(function ($room) {
            return [
                'id' => $room->id,
                'name' => $room->name,
                'updateURL' => route('rooms.update', $room),
                'deleteURL' => route('rooms.destroy', $room),
            ];
        });

        return inertia('room/index', [
            'rooms' => $rooms,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoomRequest $request)
    {
        Room::create(array_merge($request->validated(), ['teacher_id' => $this->user()->id]));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoomRequest $request, Room $room)
    {
        $this->authorize('update', $room);
        $room->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        $this->authorize('delete', $room);
        $room->deleteOrFail();
    }
}
