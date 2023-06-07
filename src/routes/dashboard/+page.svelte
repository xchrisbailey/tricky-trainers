<script lang="ts">
  import DogListItem from '$lib/components/DogListItem.svelte';

  export let data;
</script>

<h2 class="mb-3 h1">Hi, {data.user?.first_name}</h2>

<div class="w-1/3 card">
  <header class="card-header"><h3 class="h3">The Squad</h3></header>
  <section class="p-4">
    {#if data.user?.dogs && data.user.dogs.length !== 0}
      {#each data.user.dogs as dog}
        <DogListItem {dog} />
      {/each}
    {:else}
      <p>
        Your pack is looking a bit sparse. Lets <a href="/dogs/add" class="anchor">add</a> your first
        fuzzy pal
      </p>
    {/if}
  </section>
  <footer class="flex justify-end card-footer">
    <a href="/dogs/add" class="anchor">add another best friend</a>
  </footer>
</div>
