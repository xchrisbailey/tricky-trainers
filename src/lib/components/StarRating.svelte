<script lang="ts">
  import { Star } from 'svelte-lucide';

  export let rating: number;
  $: star_count = Array(Math.floor(rating)).fill(1);
</script>

<div class="flex gap-1 justify-between align-middle">
  {#each star_count as _}
    <Star />
  {/each}
</div>
