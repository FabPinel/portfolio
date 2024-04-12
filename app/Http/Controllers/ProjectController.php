<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return Inertia::render('Dashboard', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function store(Request $request)
    {
        Project::create($request->all());

        return redirect()->route('dashboard');
    }

    public function edit(Project $project)
    {
        return Inertia::render('Admin/projects/Edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => ['required', Rule::unique('projects')->ignore($project)]
        ]);

        $project->update($request->all());

        return redirect()->route('dashboard');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('dashboard');
    }
}
