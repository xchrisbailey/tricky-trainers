import { db } from '$lib/db';
import { new_trick_schema } from '$lib/schemas/trick';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();

  if (user?.role !== 'ADMIN') return redirect(300, '/login');
  const form = await superValidate(null, new_trick_schema);

  return {
    form,
    user
  };
};

export const actions = {
  default: async ({ locals, request }) => {
    const { user } = await locals.auth.validateUser();
    if (!user?.userId) throw redirect(300, '/login');

    const data = await request.formData();
    const form = await superValidate(data, new_trick_schema);

    if (!form.valid) throw fail(400, { form });
    try {
      await db.trick.create({
        data: {
          ...form.data,
          User: {
            connect: {
              id: user.userId
            }
          }
        }
      });
    } catch (e) {
      throw fail(400, { e });
    }
  }
} satisfies Actions;
