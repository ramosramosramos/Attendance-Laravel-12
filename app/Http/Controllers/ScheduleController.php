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

        return inertia('schedule/index', [
            'schedules' => ScheduleResource::collection($this->user()->schedules()->select([
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
            ])->get()),
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
        return inertia('schedule/edit', ['schedule' => $schedule]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateScheduleRequest $request, Schedule $schedule)
    {
        $schedule->update($request->validated());
    }

    public function drag(Request $request, Schedule $schedule)
    {
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
        $schedule->delete();
    }
}
