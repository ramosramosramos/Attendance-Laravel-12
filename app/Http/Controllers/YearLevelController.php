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
        $yearLevels = $this->user()->yearLevels()->select(['id', 'name', 'teacher_id'])->get()->map(function ($yearLevel) {
            return [
                'id' => $yearLevel->id,
                'name' => $yearLevel->name,
                'updateURL' => route('year_levels.update', $yearLevel),
                'deleteURL' => route('year_levels.destroy', $yearLevel),
            ];
        });

        return inertia('year-level/index', [
            'year_levels' => $yearLevels,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreYearLevelRequest $request)
    {
        YearLevel::create(array_merge($request->validated(), ['teacher_id' => $this->user()->id]));
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
