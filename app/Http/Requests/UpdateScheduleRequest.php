<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateScheduleRequest extends FormRequest
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
            'title' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'borderColor' => ['nullable', 'string'],
            'backgroundColor' => ['nullable', 'string'],
            'textColor' => ['nullable', 'string'],
            'start_time' =>['required','date'],
            'end_time' => ['required','date'],
            'date' => ['required','date'],
        ];
    }
}
