<script>
  import { breeds } from '$lib/data/breeds';
</script>

<form method="post" class="mx-auto w-2/3">
  <div class="flex flex-col gap-5">
    <label class="label">
      <span>name</span>
      <input type="text" class="input" placeholder="name" />
    </label>
    <label class="label">
      <span>age</span>
      <div class="flex gap-5">
        <input class="input" type="number" step="1" placeholder="years" name="years" id="years" />
        <input
          class="input"
          type="number"
          step="1"
          placeholder="months"
          name="months"
          id="months" />
      </div>
    </label>
    <label class="label">
      <span>breed</span>
      <select id="breed" class="select" name="breed">
        {#each breeds as breed}
          <option value={breed}>{breed}</option>
        {/each}
      </select>
    </label>
    <button type="submit" class="self-end btn variant-ghost-surface">Submit</button>
  </div>
</form>
