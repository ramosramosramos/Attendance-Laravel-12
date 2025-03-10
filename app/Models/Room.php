<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = ['name', 'teacher_id',];

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
