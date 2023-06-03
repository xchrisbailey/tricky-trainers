<script lang="ts">
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, enhance, constraints } = superForm(data.form);
</script>

<div class="mx-auto w-2/3">
  <h2 class="mb-5 h2">Sign Up</h2>
  <form method="POST" use:enhance>
    <div class="flex flex-col gap-5">
      <label class="label">
        <span>Email</span>
        <input
          type="text"
          class="input"
          class:input-error={$errors.email}
          name="email"
          id="email"
          placeholder="email"
          data-invalid={$errors.email}
          bind:value={$form.email}
          {...$constraints.email}
        />
      </label>
      <label class="label">
        <span>Password</span>
        <input
          type="password"
          class="input"
          class:input-error={$errors.password}
          id="password"
          name="password"
          data-invalid={$errors.password}
          bind:value={$form.password}
          {...$constraints.password}
        />
      </label>
      <button class="self-end btn variant-ghost">Submit</button>
    </div>
  </form>
</div>
