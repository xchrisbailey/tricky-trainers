<script lang="ts">
  import { page } from '$app/stores';
  import type { User } from 'lucia-auth';
  import { PlusCircle } from 'svelte-lucide';

  export let user: User | null;
</script>

<ul class="list-nav">
  <li>
    <a href="/">Home</a>
  </li>
  {#if user}
    <li><a href="/dashboard">Dashboard</a></li>
  {/if}
  <li>
    <a href="/tricks">Tricks</a>
    {#if $page.route.id === '/tricks' && user?.role === 'ADMIN'}
      <ul class="list-nav">
        <li class="flex items-center ml-5">
          <a href="/tricks/add"><PlusCircle class="mr-2" /> New Trick</a>
        </li>
      </ul>
    {/if}
  </li>
</ul>
