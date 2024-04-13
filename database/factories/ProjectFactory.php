<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'desc' => $this->faker->paragraph(),
            'start' => $this->faker->date(),
            'end' => $this->faker->date(),
            'context' => $this->faker->sentence(),
            'tasks' => $this->faker->paragraph(),
            'conclusion' => $this->faker->sentence(),
            'url' => $this->faker->url(),
            'github' => $this->faker->url(),
            'category' => $this->faker->word(),
            'img' => 'assets/img/' . $this->faker->image('public/storage/assets/img', 640, 480, null, false),
        ];
    }
}
