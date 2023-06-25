<script lang="ts">
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
  import '../app.postcss';
  import { AppShell, Toast } from '@skeletonlabs/skeleton';
  import Sidebar from '$lib/components/sidebar.svelte';
  import Header from '$lib/components/header.svelte';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  import type { PageData } from './$types';

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  export let data: PageData;
</script>

<!-- <svelte:head> -->
<!--   {@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`} -->
<!-- </svelte:head> -->

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4" slotHeader="sticky">
  <svelte:fragment slot="header"><Header user={data.user} /></svelte:fragment>
  <svelte:fragment slot="sidebarLeft"><Sidebar user={data.user} /></svelte:fragment>
  <main class="p-4">
    <slot />
  </main>
</AppShell>

<Toast />
