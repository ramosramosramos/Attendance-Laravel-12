<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['name', 'teacher_id', 'code'];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
