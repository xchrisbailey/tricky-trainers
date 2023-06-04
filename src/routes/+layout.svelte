<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-modern.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '../app.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import Sidebar from '$lib/components/sidebar.svelte';
  import Header from '$lib/components/header.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<AppShell
  slotSidebarLeft="bg-surface-500/5 w-56 p-4"
  slotHeader="shadow sticky"
>
  <svelte:fragment slot="header"><Header user={data.user} /></svelte:fragment>
  <svelte:fragment slot="sidebarLeft"
    ><Sidebar user={data.user} /></svelte:fragment
  >
  <main class="p-4">
    <slot />
  </main>
</AppShell>
