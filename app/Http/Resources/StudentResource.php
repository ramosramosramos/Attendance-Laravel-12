<?php

namespace App\Http\Resources;

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
            'id' => $this->name,
            'name' => $this->name,
            'course' => $this->course,
            'year_level' => $this->year_level,
            'created_at' => $this->created_at,
        ];
    }
}
