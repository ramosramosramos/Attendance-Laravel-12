<?php

namespace App\Http\Resources;

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
            'borderColor' => $this->borderColor,
            'backgroundColor' => $this->backgroundColor,
            'textColor' => $this->textColor,
            'extendedProps' => [
                'start_time' => Carbon::parse($this->start_time)->toDayDateTimeString(),
                'end_time' =>  Carbon::parse($this->end_time)->toDayDateTimeString(),
                'date' =>  Carbon::parse($this->date)->toFormattedDayDateString(),
            ],
            'date' => $this->date,
        ];
    }
}
