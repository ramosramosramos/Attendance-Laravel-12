<?php

use App\Models\Course;
use App\Models\Section;
use App\Models\Subject;
use App\Models\User;
use App\Models\YearLevel;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained('users')->cascadeOnDelete();
            $table->string('title');
            $table->text('description')->nullable();
            $table->text('backgroundColor')->nullable();
            $table->text('borderColor')->nullable();
            $table->text('textColor')->nullable();
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->date('date')->nullable();
            // $table->string('course_name');
            // $table->string('subject_name');
            // $table->string('section_name');
            // $table->string('year_level_name');
            $table->foreignIdFor(Course::class)->constrained('courses')->cascadeOnDelete();
            $table->foreignIdFor(Subject::class)->constrained('subjects')->cascadeOnDelete();
            $table->foreignIdFor(Section::class)->constrained('sections')->cascadeOnDelete();
            $table->foreignIdFor(YearLevel::class)->constrained('sections')->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
