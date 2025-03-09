<?php

namespace App\Providers;

use App\Models\Course;
use App\Models\Schedule;
use App\Models\Section;
use App\Models\Subject;
use App\Models\YearLevel;
use App\Observers\CourseObserver;
use App\Observers\ScheduleObserver;
use App\Policies\CoursePolicy;
use App\Policies\SchedulePolicy;
use App\Policies\SectionPolicy;
use App\Policies\SubjectPolicy;
use App\Policies\YearLevelPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        // policies
        Gate::policy(Schedule::class, SchedulePolicy::class);
        Gate::policy(Course::class, CoursePolicy::class);
        Gate::policy(Subject::class, SubjectPolicy::class);
        Gate::policy(Section::class, SectionPolicy::class);
        Gate::policy(YearLevel::class, YearLevelPolicy::class);


        //observers
        Schedule::observe(ScheduleObserver::class);
        Course::observe(CourseObserver::class);
    }
}
