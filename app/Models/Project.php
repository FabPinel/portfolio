<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'desc',
        'start',
        'end',
        'context',
        'tasks',
        'conclusion',
        'url',
        'github',
        'category',
        'img',
    ];

    public function stacks()
    {
        return $this->belongsToMany(Stack::class, 'project_stacks', 'project_id', 'stack_id');
    }
}
