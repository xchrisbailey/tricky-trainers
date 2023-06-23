<script lang="ts">
  import type { PageData } from './$types';
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { Edit, Trash2 } from 'svelte-lucide';

  export let data: PageData;
</script>

<h2 class="h1">{data.dog.flare} {data.dog.name}</h2>
<div class="grid grid-cols-2 gap-10">
  <section class="flex flex-col gap-1 mt-3">
    <h3 class="h3">Basic Info</h3>
    <p>
      <span class="underline">age</span>:
      {#if data.dog.age_years > 1}
        {data.dog.age_years} years
      {:else if data.dog.age_years === 1}
        {data.dog.age_years} year
      {/if}
      {#if data.dog.age_months > 1}
        {data.dog.age_months} months
      {:else if data.dog.age_months === 1}
        {data.dog.age_months} month
      {/if}
      old
    </p>
    <p><span class="underline">breed</span>: {data.dog.breed}</p>
  </section>
  <section class="flex flex-col gap-1 mt-3">
    <h3 class="h3">Training Log</h3>
    {#if data.dog?.TrainingLog.length > 0}
      add some logs
    {:else}
      <p>no training logs</p>
    {/if}
    <button class="mt-4 btn variant-ghost">add a training event</button>
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
  <a href={`/dogs/${data.dog.id}/edit`} class="btn-icon variant-ghost-secondary"><Edit /></a>
</div>
