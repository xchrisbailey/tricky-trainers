<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

{#each data.tricks as trick}
  <p>{trick.name}</p>
{/each}
