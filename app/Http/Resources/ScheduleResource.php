<?php

namespace App\Http\Resources;

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
                'start_time' => $this->start_time,
                'end_time' => $this->end_time,
            ],
            'date' => $this->date,
        ];
    }
}
