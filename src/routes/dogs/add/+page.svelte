<script lang="ts">
  import { breeds } from '$lib/data/breeds';
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';

  export let data: PageData;
  const { form, errors } = superForm(data.form);
</script>

<form method="POST" class="mx-auto w-2/3">
  <div class="flex flex-col gap-5">
    <label class="label">
      <span class="font-bold">name</span>
      <input
        type="text"
        class="input"
        placeholder="name"
        name="name"
        id="name"
        bind:value={$form.name} />
    </label>
    <label class="label">
      <span class="font-bold">age</span>
      <div class="flex gap-5 justify-between">
        <label class="flex gap-5 items-baseline label grow">
          <span>Years:</span>
          <input
            class="input grow"
            type="number"
            step="1"
            name="age_years"
            bind:value={$form.age_years} />
        </label>
        <label class="flex gap-5 items-baseline label grow">
          <span>Months:</span>
          <input
            class="input grow"
            name="age_months"
            type="number"
            step="1"
            bind:value={$form.age_months} />
        </label>
      </div>
    </label>
    <label class="label">
      <span class="font-bold">breed</span>
      <select id="breed" class="select" name="breed" bind:value={$form.breed}>
        {#each breeds as breed}
          <option value={breed}>{breed}</option>
        {/each}
      </select>
    </label>
    <button class="self-end btn variant-ghost-surface">Submit</button>
  </div>
</form>
