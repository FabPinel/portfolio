<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('img');
            $table->string('title');
            $table->text('desc');
            $table->date('start');
            $table->date('end');
            $table->text('context');
            $table->text('tasks');
            $table->text('conclusion')->nullable();
            $table->string('url')->nullable();
            $table->string('github')->nullable();
            $table->string('category');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
