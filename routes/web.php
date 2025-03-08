<?php

use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StudentController;
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
    Route::post('/schedules/{schedule}/update', [ScheduleController::class, 'update'])->name('schedules.update');
    Route::post('/schedules/{schedule}/destroy', [ScheduleController::class, 'destroy'])->name('schedules.destroy');
    Route::post('/schedules/{schedule}/drag', [ScheduleController::class, 'drag'])->name('schedules.drag');

    Route::resource('/students', StudentController::class)->except(['update', 'destroy']);
    Route::post('/students/{student}/update', [StudentController::class, 'update'])->name('students.update');
    Route::post('/students/{student}/destroy', [StudentController::class, 'destroy'])->name('students.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
