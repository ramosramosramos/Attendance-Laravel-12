<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreScheduleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'numeric', 'exists:users,id'],
            'title' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'borderColor' => ['nullable', 'string'],
            'backgroundColor' => ['nullable', 'string'],
            'textColor' => ['nullable', 'string'],
            'start_time' => ['required', 'date', 'before:end_time'],
            'end_time' => ['required', 'date', 'after:start_time'],
            'date' => ['required', 'date'],
            'course_id' => ['required', 'exists:courses,id'],
            'subject_id' => ['required', 'exists:subjects,id'],
            'section_id' => ['required', 'exists:sections,id'],
            'year_level_id' => ['required', 'exists:year_levels,id'],
            'room_id' => ['required', 'exists:rooms,id'],
        ];
    }

    public function messages(): array
    {
        return [
            'course_id.required' => 'The course field is required.',
            'subject_id.required' => 'The subject field is required.',
            'section_id.required' => 'The section field is required.',
            'year_level_id.required' => 'The year level field is required.',
            'room_id.required' => 'The room field is required.',

            'course_id.exists' => 'This course does not exists.',
            'subject_id.exists' => 'This subject does not exists.',
            'section_id.exists' => 'This section does not exists.',
            'year_level_id.exists' => 'This year level does not exists.',
            'room_id.exists' => 'This room does not exists.',

        ];
    }
}
