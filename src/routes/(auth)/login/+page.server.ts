import { user_schema } from '$lib/schemas/auth';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
  const { session } = await locals.auth.validateUser();
  if (session) throw redirect(302, '/dashboard');
  const form = await superValidate(null, user_schema);
  return { form };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const form = await superValidate(data, user_schema);

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const key = await auth.useKey(
        'email',
        form.data.email,
        form.data.password
      );

      const session = await auth.createSession(key.userId);
      locals.auth.setSession(session);
    } catch {
      return fail(400);
    }
  }
};
