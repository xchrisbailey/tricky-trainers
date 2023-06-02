<script lang="ts">
  import { enhance } from '$app/forms'
  import { superForm } from 'sveltekit-superforms/client'

  export let data: import('./$types').PageData

  const { form } = superForm(data.form)
</script>

<div class="mx-auto w-2/3">
  <h2>Log In</h2>
</div>

<form method="post" use:enhance>
  <div class="flex flex-col gap-5 mx-auto w-2/3">
    <label class="label">
      <span>email</span>
      <input
        class="input"
        type="text"
        placeholder="email"
        name="email"
        bind:value={$form.email}
      />
    </label>
    <label class="label">
      <span>password</span>
      <input
        class="input"
        type="password"
        placeholder="password"
        name="password"
        bind:value={$form.password}
      />
    </label>
    <button class="self-end btn variant-filled">Submit</button>
  </div>
</form>
