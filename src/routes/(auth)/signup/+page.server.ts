import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import { superValidate } from 'sveltekit-superforms/server';
import { insert_user_schema } from '$lib/db/schema';
import { z } from 'zod';

const signup_schema = insert_user_schema.extend({
  password: z.string().min(6)
});

export const load: PageServerLoad = async ({ locals }) => {
  const { session } = await locals.auth.validateUser();
  if (session) throw redirect(302, '/dashboard');

  const form = await superValidate(null, signup_schema);
  return { form };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const form = await superValidate(data, signup_schema);
    const email = form.data.email;
    const password = form.data.password;
    const first_name = form.data.first_name;
    const last_name = form.data.last_name;

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
          email,
          first_name,
          last_name
        }
      });

      const session = await auth.createSession(user.userId);
      locals.auth.setSession(session);
    } catch (e) {
      console.log(e);

      return fail(400);
    }
  }
};
