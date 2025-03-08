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
        $sections = $this->user()->sections()->select(['id','name','teacher_id'])->get();
        $this->authorize('view',$sections->first());
        return inertia('section/index',[
            'sections' => $sections,
        ]);
    }

    public function store(StoreSectionRequest $request)
    {
        Section::create($request->validated());
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
