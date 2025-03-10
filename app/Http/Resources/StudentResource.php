<?php

namespace App\Http\Resources;

use App\Enum\ThenResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'course_name' => $this->course?->name ?? ThenResponse::NO_COURSE,
            'section_name' => $this->section?->name ?? ThenResponse::NO_SECTION,
            'year_level_name' => $this->yearLevel?->name ?? ThenResponse::NO_YEAR_LEVEL,
            'editURL' => route('students.edit', parameters: $this->id),
            'deleteURL' => route('students.destroy', $this->id),
        ];
    }
}
