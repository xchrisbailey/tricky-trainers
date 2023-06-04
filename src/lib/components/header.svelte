<script lang="ts">
  import { enhance } from '$app/forms';
  import { AppBar } from '@skeletonlabs/skeleton';
  import { LogIn, LogOut } from 'svelte-lucide';

  import type { User } from 'lucia-auth';

  export let user: User;

  console.log(user);
</script>

<AppBar>
  <svelte:fragment slot="lead">(burger)</svelte:fragment>
  <h1 class="h2">Tricky Trainers</h1>
  <svelte:fragment slot="trail">
    {#if !user}
      <a href="/login" class="btn-icon variant-ghost-surface"><LogIn /></a>
    {:else}
      <form action="/signout" method="post" use:enhance>
        <button type="submit" class="btn-icon variant-ghost-surface"
          ><LogOut /></button
        >
      </form>
    {/if}
  </svelte:fragment>
</AppBar>
