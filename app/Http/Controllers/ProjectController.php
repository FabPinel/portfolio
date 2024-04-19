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
        $projects = Project::with('stacks')->get();
        return response()->json(['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function store(Request $request)
    {    
        $imageName = $request->file('img')->getClientOriginalName();
        $request->file('img')->storeAs('public/img', $imageName);
    
        $projectData = $request->except('img');
        $projectData['img'] = $imageName;
        Project::create($projectData);
    
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
        $imagePath = public_path('assets/img/' . $project->img);
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
    
        $project->delete();
    
        return redirect()->route('dashboard');
    }
    
    public function show(Request $request)
    {
        $id = $request->route('id');
    
        $project = Project::with('stacks')->find($id);
    
        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }
    
        return Inertia::render('Project', ['project' => $project]);
    }
    

    public function getProjectJson($id)
    {
        $project = Project::with('stacks')->find($id);

        if (!$project) {
            return response()->json(['error' => 'Project not found'], 404);
        }

        return response()->json(['project' => $project]);
    }

    
    
}
