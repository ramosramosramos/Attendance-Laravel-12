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
        ];

    }
}
