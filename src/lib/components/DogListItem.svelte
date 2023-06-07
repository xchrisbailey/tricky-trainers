<script lang="ts">
  import type { Dog } from '$lib/db/schema';

  export let dog: Dog;
</script>

<dl class="list-dl">
  <a href={`/dogs/${dog.id}`} class="group">
    <div class="group-hover:bg-surface-600">
      <span class="badge bg-primary-500">✨</span>
      <span class="flex-auto">
        <dt>{dog.name}</dt>
        <dd>
          {dog.age_years > 0 ? `${dog.age_years} year` : ``}
          {dog.age_months > 0 ? `${dog.age_months} month` : ``} old {dog.breed}
        </dd>
      </span>
    </div>
  </a>
</dl>
