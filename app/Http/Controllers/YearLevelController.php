<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreYearLevelRequest;
use App\Http\Requests\UpdateYearLevelRequest;
use App\Models\YearLevel;

class YearLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $yearLevels = $this->user()->yearLevels()->select(['id', 'name', 'teacher_id'])->get();
        $this->authorize('view', $yearLevels->first());

        return inertia('year-level/index', [
            'yearLevels' => $yearLevels,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreYearLevelRequest $request)
    {
        YearLevel::create($request->validated());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateYearLevelRequest $request, YearLevel $yearLevel)
    {
        $this->authorize('update', $yearLevel);
        $yearLevel->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(YearLevel $yearLevel)
    {
        $this->authorize('delete', $yearLevel);
        $yearLevel->deleteOrFail();
    }
}
