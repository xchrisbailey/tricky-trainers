<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton'
  import { LogIn } from 'svelte-lucide'
</script>

<AppBar>
  <svelte:fragment slot="lead">(burger)</svelte:fragment>
  <h1 class="h2">Tricky Trainers</h1>
  <svelte:fragment slot="trail"
    ><a href="/login" class="btn-icon variant-ghost-surface"><LogIn /></a
    ></svelte:fragment
  >
</AppBar>
