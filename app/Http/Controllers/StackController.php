<?php

namespace App\Http\Controllers;

use App\Models\Stack;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class StackController extends Controller
{
    public function index()
    {
        $stacks = Stack::all();
        return Inertia::render('Dashboard', ['stacks' => $stacks]);
    }

    public function create()
    {
        return Inertia::render('Admin/Stacks/Create');
    }

    public function store(Request $request)
    {
        Stack::create($request->all());

        return redirect()->route('dashboard');
    }

    public function edit(Stack $stack)
    {
        return Inertia::render('Admin/Stacks/Edit', ['stack' => $stack]);
    }

    public function update(Request $request, Stack $stack)
    {
        $request->validate([
            'name' => ['required', Rule::unique('stacks')->ignore($stack)]
        ]);

        $stack->update($request->all());

        return redirect()->route('dashboard');
    }

    public function destroy(Stack $stack)
    {
        $stack->delete();
        return redirect()->route('dashboard');
    }
}
