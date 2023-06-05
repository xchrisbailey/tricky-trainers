import { db } from '$lib/db';
import { dog, insert_dog_schema } from '$lib/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, '/login');

  const form = await superValidate(null, insert_dog_schema);

  return {
    form,
    user
  };
};

export const actions = {
  default: async ({ locals, request }) => {
    const { user } = await locals.auth.validateUser();
    if (!user?.userId) return redirect(300, '/');

    const data = await request.formData();

    const form = await superValidate(data, insert_dog_schema);
    form.data.uid = user.userId;

    if (!form.valid) return fail(400, { form });

    try {
      await db.insert(dog).values(form.data);
    } catch (e) {
      fail(400, { e });
    }
  }
} satisfies Actions;
