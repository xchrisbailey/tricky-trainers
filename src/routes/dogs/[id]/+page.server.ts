import { db } from '$lib/db';
import { dog as dogSchema, type Dog, dog } from '$lib/db/schema';
import { error, fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, 'login');

  const dog: Dog[] = await db.select().from(dogSchema).where(eq(dogSchema.id, params.id));

  if (!dog[0] || !dog) {
    return redirect(300, 'dog not found');
  } else if (dog[0].uid !== user.userId) {
    return error(401, 'not your puppers');
  }

  return {
    dog
  };
};

export const actions = {
  delete: async ({ params, locals }) => {
    const { user } = await locals.auth.validateUser();
    if (!user) return redirect(300, 'login');

    const id = params.id;

    try {
      await db.delete(dog).where(eq(dog.id, id));
      return {
        success: true
      };
    } catch (e) {
      return fail(400, { e });
    }
  }
} satisfies Actions;
