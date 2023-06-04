<script lang="ts">
  import { breeds } from '$lib/data/breeds';
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';

  export let data: PageData;
  const { form, enhance, errors } = superForm(data.form);
</script>

<form method="POST" class="mx-auto w-2/3" use:enhance>
  <div class="flex flex-col gap-5">
    <label class="label">
      <span>name</span>
      <input
        type="text"
        class="input"
        placeholder="name"
        name="name"
        id="name"
        bind:value={$form.name} />
    </label>
    <label class="label">
      <span>age</span>
      <div class="flex gap-5">
        <input
          class="input"
          type="number"
          step="1"
          placeholder="years"
          name="years"
          id="years"
          bind:value={$form.ageYears} />
        <input
          class="input"
          type="number"
          step="1"
          placeholder="months"
          name="months"
          id="months"
          bind:value={$form.ageMonths} />
      </div>
    </label>
    <label class="label">
      <span>breed</span>
      <select id="breed" class="select" name="breed" bind:value={$form.breed}>
        {#each breeds as breed}
          <option value={breed}>{breed}</option>
        {/each}
      </select>
    </label>
    <button class="self-end btn variant-ghost-surface">Submit</button>
  </div>
</form>
