<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Stack;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $stacks = Stack::all();
        $projects = Project::all();
        
        return Inertia::render('Dashboard', ['stacks' => $stacks, 'projects' => $projects]);
    }
}
