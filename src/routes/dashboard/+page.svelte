<script lang="ts">
  export let data;
</script>

<h2 class="h1">Hi, {data.user?.first_name}</h2>

<div class="w-1/3 card">
  <header class="card-header"><h3 class="h3">Your Doggos</h3></header>
  <section class="p-4">
    {#if data.user?.dogs && data.user.dogs.length !== 0}
      {#each data.user.dogs as dog}
        <dl class="list-dl">
          <div>
            <span class="badge bg-primary-500">✨</span>
            <span class="flex-auto">
              <dt>{dog.name}</dt>
              <dd>
                {dog.age_years > 0 ? `${dog.age_years} year` : ``}
                {dog.age_months > 0 ? `${dog.age_months} month` : ``} old {dog.breed}
              </dd>
            </span>
          </div>
        </dl>
      {/each}
    {:else}
      <p>
        Your pack is looking a bit sparse. Lets <a href="/dogs/add" class="anchor">add</a> your first
        fuzzy pal
      </p>
    {/if}
  </section>
  <footer class="flex justify-end card-footer">
    <a href="/dogs/add" class="anchor">add another best friend</a>
  </footer>
</div>
