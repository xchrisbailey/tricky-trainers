<script lang="ts">
  import { RangeSlider, toastStore } from '@skeletonlabs/skeleton';
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import { fail } from '@sveltejs/kit';
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  import { goto } from '$app/navigation';

  export let data: PageData;

  if (!data.form) throw fail(400);
  const { form, constraints, errors, enhance } = superForm(data.form, {
    resetForm: true,
    invalidateAll: true,
    applyAction: true,
    onResult({ result }) {
      if (result.type === 'success') {
        goto('/tricks');
        toastStore.trigger({
          message: 'trick added to database',
          background: 'variant-filled-success'
        });
      }
    }
  });
</script>

<form use:enhance method="post" class="flex flex-col gap-4 mx-auto w-3/4">
  <label class="label">
    <span class="font-bold">Name</span>
    <input
      type="text"
      class="input"
      class:input-error={$errors.name}
      name="name"
      bind:value={$form.name}
      data-invalid={$errors.name}
      {...$constraints.name}
    />
  </label>
  <div class="flex gap-2 justify-between">
    <label class="flex-grow label">
      <span class="font-bold">Description</span>
      <input
        class="input"
        class:input-error={$errors.description}
        type="text"
        name="description"
        bind:value={$form.description}
        data-invalid={$errors.description}
        {...$constraints.description}
      />
    </label>
    <label class="flex-grow label">
      <span class="font-bold">Example URL</span>
      <input
        class="input"
        class:input-error={$errors.example}
        type="url"
        name="example"
        bind:value={$form.example}
        data-invalid={$errors.example}
        {...$constraints.example}
      />
    </label>
  </div>
  <RangeSlider max={5} step={1} name="difficulty" ticked bind:value={$form.difficulty}>
    <div class="flex justify-between items-center">
      <div class="font-bold">Difficulty</div>
      <div class="font-xs">{$form.difficulty} / 5</div>
    </div>
  </RangeSlider>
  <button class="self-end btn variant-ghost-surface">Submit</button>
</form>

<SuperDebug data={$form} />
