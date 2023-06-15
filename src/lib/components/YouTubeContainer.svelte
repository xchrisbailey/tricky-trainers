<script lang="ts">
  export let url: string;
  export let trick_name: string;
</script>

<iframe
  title={trick_name}
  src={`https://youtube.com/embed/${url.split('/')[3]}?autoplay=1&rel=0`}
  frameborder="0"
  allow="autoplay; picture-in-picture; clipboard-write"
  allowfullscreen
  class="w-full h-auto"
/>
