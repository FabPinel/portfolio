<?php

namespace Tests\Feature;

use App\Models\Stack;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class StackTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_stack_can_be_created(): void
    {
        $stackData = ['name' => $this->faker->word];

        $response = $this->post(route('stacks.store'), $stackData);

        $response->assertRedirect(route('dashboard'));
        $this->assertDatabaseHas('stacks', $stackData);
    }

    public function test_stack_can_be_updated(): void
    {
        $stack = Stack::factory()->create();
        $updatedName = $this->faker->word;

        $response = $this->put(route('stacks.update', $stack), ['name' => $updatedName]);

        $response->assertRedirect(route('dashboard'));
        $this->assertDatabaseHas('stacks', ['id' => $stack->id, 'name' => $updatedName]);
    }

    public function test_stack_can_be_deleted(): void
    {
        $stack = Stack::factory()->create();

        $response = $this->delete(route('stacks.destroy', $stack));

        $response->assertRedirect(route('dashboard'));
        $this->assertDatabaseMissing('stacks', ['id' => $stack->id]);
    }
}
