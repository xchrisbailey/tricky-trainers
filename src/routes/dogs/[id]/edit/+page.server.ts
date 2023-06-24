import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/db';
import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { update_dog_schema } from '$lib/schemas/dog';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) throw redirect(300, 'login');

  const dog = await db.dog.findFirst({ where: { id: params.id, user_id: user.userId } });
  if (!dog) throw redirect(300, 'dog not found');

  const form = await superValidate(dog, update_dog_schema);

  if (!form.valid) return fail(400, { form });

  return {
    form
  };
};

export const actions = {
  default: async ({ params, request, locals }) => {
    const { user } = await locals.auth.validateUser();
    if (!user) throw fail(401);

    const data = await request.formData();
    const form = await superValidate(data, update_dog_schema);

    if (!form.valid) throw fail(400, { form });

    try {
      await db.dog.update({ where: { id: params.id }, data: form.data });
      return { success: true };
    } catch (e) {
      return fail(400, { e });
    }
  }
} satisfies Actions;
