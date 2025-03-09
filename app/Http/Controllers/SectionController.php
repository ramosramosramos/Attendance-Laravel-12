<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSectionRequest;
use App\Http\Requests\UpdateSectionRequest;
use App\Models\Section;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sections = $this->user()->sections()->select(['id', 'name', 'teacher_id'])
            ->get()->map(function ($section) {
                return [
                    'id' => $section->id,
                    'name' => $section->name,
                    'updateURL' => route('sections.update', $section),
                    'deleteURL' => route('sections.destroy', $section),
                ];
            });

        return inertia('section/index', [
            'sections' => $sections,
        ]);
    }

    public function store(StoreSectionRequest $request)
    {
        Section::create(array_merge($request->validated(), ['teacher_id' => $this->user()->id]));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSectionRequest $request, Section $section)
    {
        $this->authorize('update', $section);
        $section->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        $this->authorize('delete', $section);
        $section->deleteOrFail();
    }
}
