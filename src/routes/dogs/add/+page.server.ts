import { db } from '$lib/db';
import { new_dog_schema } from '$lib/schemas/dog';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) throw redirect(300, '/login');

  const form = await superValidate(null, new_dog_schema);

  return {
    form,
    user
  };
};

export const actions = {
  default: async ({ locals, request }) => {
    const { user } = await locals.auth.validateUser();
    if (!user?.userId) throw redirect(300, '/');

    const data = await request.formData();

    const form = await superValidate(data, new_dog_schema);

    /** Titlecase dog name */
    form.data.name = form.data.name
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.substring(1))
      .join(' ');

    if (!form.valid) return fail(400, { form });

    try {
      await db.dog.create({
        data: {
          ...form.data,
          User: {
            connect: {
              id: user.userId
            }
          },
          TrainingLog: {
            create: {
              user: {
                connect: {
                  id: user.userId
                }
              }
            }
          }
        }
      });

      return { success: true };
    } catch (e) {
      throw fail(400, { e });
    }
  }
} satisfies Actions;
