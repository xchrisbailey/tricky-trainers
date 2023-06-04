import { db } from '$lib/db';
import { dog } from '$lib/db/schema';
import { dog_schema } from '$lib/schemas/dog';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, '/login');

  const form = await superValidate(null, dog_schema);

  return {
    form,
    user
  };
};

export const actions = {
  default: async ({ locals, request }) => {
    const { user } = await locals.auth.validateUser();
    if (!user) return redirect(300, '/');

    const new_dog_schema = dog_schema.pick({
      name: true,
      breed: true,
      ageYears: true,
      ageMonths: true
    });

    const data = await request.formData();
    const form = await superValidate(data, new_dog_schema);
    if (!form.valid) return fail(400, { form });

    try {
      await db.insert(dog).values({
        name: form.data.name,
        breed: form.data.breed,
        age_years: form.data.ageYears,
        age_months: form.data.ageMonths,
        uid: user.userId
      });
    } catch (e) {
      fail(400, { e });
    }
  }
} satisfies Actions;
