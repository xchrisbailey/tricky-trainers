<script lang="ts">
  import { Youtube } from 'svelte-lucide';
  import type { PageData } from './$types';
  import YouTubeContainer from '$lib/components/YouTubeContainer.svelte';
  import StarRating from '$lib/components/StarRating.svelte';

  export let data: PageData;
</script>

<div class="grid grid-cols-3 gap-4">
  {#each data.tricks as trick}
    <article class="card variant-ghost-surface">
      <header class="card-header">
        <h3 class="h3">
          {trick.name}
        </h3>
      </header>
      <section class="p-4">
        <p class="mb-2">{trick.description}</p>
        <YouTubeContainer trick_name={trick.name} url={trick.example} />
      </section>
      <footer class="flex justify-between card-footer">
        <a href={trick.example}><Youtube /></a>
        <StarRating rating={trick.difficulty} />
      </footer>
    </article>
  {/each}
</div>
