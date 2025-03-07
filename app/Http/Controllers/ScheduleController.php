<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreScheduleRequest;
use App\Http\Requests\UpdateScheduleRequest;
use App\Http\Resources\ScheduleResource;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $schedule = $this->user()->schedules()->select([
            'id',
            'title',
            'description',
            'borderColor',
            'backgroundColor',
            'textColor',
            'start_time',
            'end_time',
            'user_id',
            'date',
        ])->get();
        $this->authorize('view', $schedule->first());

        return inertia('schedule/index', [
            'schedules' => ScheduleResource::collection($schedule),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('schedule/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreScheduleRequest $request)
    {

        Schedule::create($request->validated());
    }

    public function edit(Schedule $schedule)
    {
        $this->authorize('update', $schedule);

        return inertia('schedule/edit', ['schedule' => $schedule]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateScheduleRequest $request, Schedule $schedule)
    {
        $this->authorize('update', $schedule);
        $schedule->update($request->validated());
    }

    public function drag(Request $request, Schedule $schedule)
    {
        $this->authorize('update', $schedule);
        $validated = $request->validate([
            'date' => ['required', 'date'],
        ]);
        $schedule->update([
            'date' => Carbon::parse($validated['date'])->addDay()->toDateTime(),
            'start_time' => Carbon::parse($validated['date'])->addDay(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule)
    {
        $this->authorize('delete', $schedule);
        $schedule->delete();
    }
}
