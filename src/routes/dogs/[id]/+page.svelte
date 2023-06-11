<script lang="ts">
  import { error, redirect } from '@sveltejs/kit';
  import type { PageData } from './$types';
  import type { Dog } from '$lib/db/schema';
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { Edit, Trash2 } from 'svelte-lucide';

  export let data: PageData;
  if (!data.dog) throw error(400, 'dog not found');
  let dog: Dog = data.dog[0];
</script>

{#if !dog}
  {redirect(300, '/dashboard')}
{/if}

<h2 class="h1">{dog.flare} {dog.name}</h2>
<div class="grid grid-cols-2 gap-10">
  <section class="flex flex-col gap-1 mt-3">
    <h3 class="h3">Basic Info</h3>
    <p>
      <span class="underline">age</span>:
      {#if dog.age_years > 1}
        {dog.age_years} years
      {:else if dog.age_years === 1}
        {dog.age_years} year
      {/if}
      {#if dog.age_months > 1}
        {dog.age_months} months
      {:else if dog.age_months === 1}
        {dog.age_months} month
      {/if}
      old
    </p>
    <p><span class="underline">breed</span>: {dog.breed}</p>
  </section>
  <section>
    <h3 class="h3">Training Log</h3>
  </section>
</div>
<div class="flex gap-2 mt-10">
  <form
    action={`?/delete`}
    method="post"
    use:enhance={() => {
      return async ({ result }) => {
        if (result.type === 'success') {
          goto('/dashboard');
        }
      };
    }}
  >
    <button class="btn-icon variant-ghost-warning"><Trash2 /> </button>
  </form>
  <a href={`/dogs/${dog.id}/edit`} class="btn-icon variant-ghost-secondary"><Edit /></a>
</div>
