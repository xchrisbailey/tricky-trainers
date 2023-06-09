<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import { breeds } from '$lib/data/breeds';
  import { fail } from '@sveltejs/kit';
  import { goto } from '$app/navigation';
  import { emojis } from '$lib/data/emojis';

  export let data: PageData;

  if (!data.form?.valid) throw fail(400);
  const { form, errors, constraints, enhance } = superForm(data.form, {
    onResult({ result }) {
      if (result.type === 'success') {
        goto('/dashboard');
      }
    }
  });
</script>

<form method="POST" class="mx-auto w-2/3" use:enhance>
  <div class="flex flex-col gap-5">
    <label class="label">
      <span class="font-bold">name</span>
      <input
        type="text"
        class="input"
        class:input-error={$errors.name}
        placeholder="name"
        name="name"
        id="name"
        bind:value={$form.name}
        data-invalid={$errors.name}
        {...$constraints.name} />
    </label>
    {#if $errors.name}
      <span>{$errors.name}</span>
    {/if}
    <label class="label">
      <span class="font-bold">age</span>
      <div class="flex gap-5 justify-between">
        <label class="flex gap-5 items-baseline label grow">
          <span>Years:</span>
          <input
            class="input grow"
            class:input-error={$errors.age_years}
            type="number"
            step="1"
            name="age_years"
            bind:value={$form.age_years}
            data-invalid={$errors.age_years}
            {...$constraints.age_years} />
          {#if $errors.age_years}
            <span>{$errors.age_years}</span>
          {/if}
        </label>
        <label class="flex gap-5 items-baseline label grow">
          <span>Months:</span>
          <input
            class="input grow"
            class:input-error={$errors.age_months}
            name="age_months"
            type="number"
            step="1"
            bind:value={$form.age_months}
            data-invalid={$errors.age_months}
            {...$constraints.age_months} />
          {#if $errors.age_months}
            <span>{$errors.age_months}</span>
          {/if}
        </label>
      </div>
    </label>
    <label class="label">
      <span class="font-bold">breed</span>
      <select
        id="breed"
        class="select"
        class:input-error={$errors.breed}
        name="breed"
        bind:value={$form.breed}
        data-invalid={$errors.breed}
        {...$constraints.breed}>
        {#each breeds as breed}
          <option value={breed}>{breed}</option>
        {/each}
      </select>
      {#if $errors.breed}
        <span>{$errors.breed}</span>
      {/if}
    </label>
    <label class="label">
      <span class="font-bold">Give them some flare:</span>
      <div class="grid grid-cols-5 gap-5">
        {#each emojis as emoji}
          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                class="radio"
                name="flare"
                bind:group={$form.flare}
                value={emoji}
                {...$constraints.flare} />
              <p>{emoji}</p>
            </label>
          </div>
        {/each}
      </div>
    </label>
    <button class="self-end btn variant-ghost-surface">Submit</button>
  </div>
</form>
