<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }

    // public function  scopeGetSchedules(){
    //     return Auth::user()->schedules()->get();
    // }

    public function students()
    {
        return $this->hasMany(Student::class, 'teacher_id');
    }

    public function courses()
    {
        return $this->hasMany(Course::class, 'teacher_id');
    }

    public function subjects()
    {
        return $this->hasMany(Subject::class, 'teacher_id');
    }

    public function sections()
    {
        return $this->hasMany(Section::class, 'teacher_id');
    }

    public function yearLevels()
    {
        return $this->hasMany(YearLevel::class, 'teacher_id');
    }

    public function rooms()
    {
        return $this->hasMany(Room::class, 'teacher_id');
    }
}
