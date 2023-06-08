import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/db';
import { dog as dogSchema, type Dog, dog } from '$lib/db/schema';
import { and, eq } from 'drizzle-orm';
import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { update_dog_schema } from '$lib/schemas/dog';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, 'login');
  const dog: Dog[] = await db.select().from(dogSchema).where(eq(dogSchema.id, params.id));
  if (!dog[0]) return redirect(300, 'dog not found');
  if (dog[0].uid !== user.userId) return fail(401);

  const form = await superValidate(dog[0], update_dog_schema);

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

    if (!form.valid) return fail(400, { form });

    try {
      await db
        .update(dog)
        .set(form.data)
        .where(and(eq(dog.id, params.id), eq(dog.uid, user.userId)));
      return { success: true };
    } catch (e) {
      return fail(400, { e });
    }
  }
} satisfies Actions;
