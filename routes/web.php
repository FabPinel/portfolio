<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StackController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::match(['get', 'post', 'put', 'delete'], '/dashboard', [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

//stack
Route::get('/admin/stacks/create', [StackController::class, 'create'])->name('stacks.create');
Route::post('/admin/stacks', [StackController::class, 'store'])->name('stacks.store');
Route::get('/admin/stacks/{stack}/edit', [StackController::class, 'edit'])->name('stacks.edit');
Route::put('/admin/stacks/{stack}', [StackController::class, 'update'])->name('stacks.update');
Route::delete('/admin/stacks/{stack}', [StackController::class, 'destroy'])->name('stacks.destroy');

//project
Route::get('/admin/projects/create', [ProjectController::class, 'create'])->name('projects.create');
Route::post('/admin/projects', [ProjectController::class, 'store'])->name('projects.store');
Route::get('/admin/projects/{project}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
Route::put('/admin/projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
Route::delete('/admin/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/project', function () {
    return Inertia::render('Project', [
    ]);
});

require __DIR__.'/auth.php';
