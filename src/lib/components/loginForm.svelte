<script>
  import { enhance } from '$app/forms'
</script>

<form method="post" use:enhance>
  <div class="flex flex-col gap-5 mx-auto w-2/3">
    <label class="label">
      <span>email</span>
      <input class="input" type="text" placeholder="email" />
    </label>
    <label class="label">
      <span>password</span>
      <input class="input" type="password" placeholder="password" />
    </label>
    <button class="self-end btn variant-filled">Submit</button>
  </div>
</form>
