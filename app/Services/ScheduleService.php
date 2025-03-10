<?php

namespace App\Services;

class ScheduleService
{
    public function getTeacherSchedules($user)
    {

        return $user->schedules()
            ->with([
                'course',
                'subject',
                'section',
                'yearLevel',
                'room',
            ])->select([
                'id',
                'course_id',
                'subject_id',
                'section_id',
                'year_level_id',
                'room_id',
                'title',
                'description',
                'borderColor',
                'backgroundColor',
                'textColor',
                'start_time',
                'end_time',
                'user_id',
                'date',
            ])->get();
    }
}
