<?php

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
        Schema::create('students', function (Blueprint $table) {
            $table->id()->startingValue(1000);
            $table->foreignId('teacher_id')->constrained('users')->cascadeOnDelete(); //
            $table->foreignId('course_id')->nullable()->constrained('courses')->nullOnDelete(); //
            $table->foreignId('section_id')->nullable()->constrained(table: 'sections')->nullOnDelete(); //
            $table->foreignId('year_level_id')->nullable()->constrained('year_levels')->nullOnDelete(); //
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('gender')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('address_1')->nullable();
            $table->string('address_2')->nullable();
            $table->string('guardian')->nullable();
            $table->string('guardian_phone')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
        Schema::create('has_subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->foreignId('subject_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
