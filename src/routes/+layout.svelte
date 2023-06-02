<script lang="ts">
  import '@skeletonlabs/skeleton/themes/theme-modern.css'
  import '@skeletonlabs/skeleton/styles/skeleton.css'
  import '../app.postcss'
  import { AppShell } from '@skeletonlabs/skeleton'
  import Sidebar from '$lib/components/sidebar.svelte'
  import Header from '$lib/components/header.svelte'
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <svelte:fragment slot="header"><Header /></svelte:fragment>
  <svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
  <main class="p-4">
    <slot />
  </main>
</AppShell>
