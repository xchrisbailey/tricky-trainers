<script lang="ts">
  import { error, redirect } from '@sveltejs/kit';
  import type { PageData } from './$types';
  import type { Dog } from '$lib/db/schema';
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { Trash2 } from 'svelte-lucide';

  export let data: PageData;
  if (!data || !data.dog || !data.dog[0]) {
    redirect(300, '/dashboard');
  }

  if (!data.dog) throw error(400, 'dog not found');
  let dog: Dog = data.dog[0];
</script>

{#if !dog}
  {redirect(300, '/dashboard')}
{/if}

<h2 class="h1">{dog.name}</h2>
<div class="grid-cols-2">
  <section class="flex flex-col gap-1 mt-3">
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
</div>
<div class="flex mt-10">
  <form
    action={`?/delete`}
    method="post"
    use:enhance={() => {
      return async ({ result }) => {
        if (result.type === 'success') {
          goto('/dashboard');
        }
      };
    }}>
    <button class="btn-icon variant-ghost-warning"><Trash2 /> </button>
  </form>
</div>
