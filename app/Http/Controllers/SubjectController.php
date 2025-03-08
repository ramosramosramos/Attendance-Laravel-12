<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use App\Models\Subject;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjects = $this->user()->subjects()->select(['id','name','teacher_id'])->get();
        $this->authorize('view',$subjects->first());
        return inertia('subject/index',[
            'subjects' => $subjects,
        ]);
    }

    public function store(StoreSubjectRequest $request)
    {
        Subject::store($request->validated());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectRequest $request, Subject $subject)
    {
        $this->authorize('update',$subject);
        $subject->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        $this->authorize('delete', $subject);
        $subject->deleteOrFail();
    }
}
