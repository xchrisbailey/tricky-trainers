import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { superValidate } from 'sveltekit-superforms/server';
import { user_schema } from '$lib/schemas/auth';

export const load: PageServerLoad = async ({ locals }) => {
  const { session } = await locals.auth.validateUser();
  if (session) throw redirect(302, '/');

  const form = await superValidate(null, user_schema);
  return { form };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const form = await superValidate(data, user_schema);
    const email = form.data.email;
    const password = form.data.password;

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const user = await auth.createUser({
        primaryKey: {
          providerId: 'email',
          providerUserId: email,
          password
        },
        attributes: {
          email
        }
      });

      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);
    } catch {
      return fail(400);
    }
  }
};
