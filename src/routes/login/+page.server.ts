import { login_schema } from '$lib/schemas/auth'
import { superValidate } from 'sveltekit-superforms/server'

export const load = async () => {
  const form = await superValidate(null, login_schema)
  return { form }
}
