<?php

namespace App\Http\Resources;

use App\Enum\ThenResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->withoutWrapping();

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'borderColor' => $this->borderColor,
            'backgroundColor' => $this->backgroundColor,
            'textColor' => $this->textColor,
            'extendedProps' => [
                'start_time' => Carbon::parse($this->start_time)->toDayDateTimeString(),
                'end_time' => Carbon::parse($this->end_time)->toDayDateTimeString(),
                'date' => Carbon::parse($this->date)->toFormattedDateString(),
                'course_name' => $this->course?->name ?? ThenResponse::NO_COURSE,
                'subject_name' => $this->subject?->name ?? ThenResponse::NO_SUBJECT,
                'section_name' => $this->section?->name ?? ThenResponse::NO_SECTION,
                'year_level_name' => $this->yearLevel?->name ?? ThenResponse::NO_YEAR_LEVEL,
                'room_name' => $this->room?->name ?? ThenResponse::NO_ROOM,
            ],
            'date' => $this->date,
        ];
    }
}
