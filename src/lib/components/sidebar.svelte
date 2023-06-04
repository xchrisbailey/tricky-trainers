<script lang="ts">
  import type { User } from 'lucia-auth';

  export let user: User | null;
</script>

<ul class="list-nav">
  <li>
    <a href="/">Home</a>
  </li>
  {#if user}
    <!-- <li><a href="/dogs">My Dogs</a></li> -->
    <li><a href="/dashboard">Dashboard</a></li>
  {/if}
</ul>
