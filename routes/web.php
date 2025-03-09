<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\YearLevelController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('/schedules', ScheduleController::class)->except(['update', 'destroy']);
    Route::post('schedules/{schedule}/update', [ScheduleController::class, 'update'])->name('schedules.update');
    Route::post('schedules/{schedule}/destroy', [ScheduleController::class, 'destroy'])->name('schedules.destroy')->middleware('password.confirm');
    Route::post('schedules/{schedule}/drag', [ScheduleController::class, 'drag'])->name('schedules.drag');

    Route::resource('/students', StudentController::class)->except(['update', 'destroy']);
    Route::post('/students/{student}/update', [StudentController::class, 'update'])->name('students.update');
    Route::post('/students/{student}/destroy', [StudentController::class, 'destroy'])->name('students.destroy');

    Route::get('courses', [CourseController::class, 'index'])->name('courses.index');
    Route::post('courses/store', [CourseController::class, 'store'])->name('courses.store');
    Route::post('courses/{course}/update', [CourseController::class, 'update'])->name('courses.update');
    Route::post('courses/{course}/destroy', [CourseController::class, 'destroy'])->name('courses.destroy')->middleware('password.confirm');

    Route::get('subjects', [SubjectController::class, 'index'])->name('subjects.index');
    Route::post('subjects/store', [SubjectController::class, 'store'])->name('subjects.store');
    Route::post('subjects/{subject}/update', [SubjectController::class, 'update'])->name('subjects.update');
    Route::post('subjects/{subject}/destroy', [SubjectController::class, 'destroy'])->name('subjects.destroy');

    Route::get('sections', [SectionController::class, 'index'])->name('sections.index');
    Route::post('sections/store', [SectionController::class, 'store'])->name('sections.store');
    Route::post('sections/{section}/update', [SectionController::class, 'update'])->name('sections.update');
    Route::post('sections/{section}/destroy', [SectionController::class, 'destroy'])->name('sections.destroy');

    Route::get('year_levels', [YearLevelController::class, 'index'])->name('year_levels.index');
    Route::post('year_levels/store', [YearLevelController::class, 'store'])->name('year_levels.store');
    Route::post('year_levels/{year_level}/update', [YearLevelController::class, 'update'])->name('year_levels.update');
    Route::post('year_levels/{year_level}/destroy', [YearLevelController::class, 'destroy'])->name('year_levels.destroy');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
