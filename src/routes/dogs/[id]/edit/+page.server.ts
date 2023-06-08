import { error, fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/db';
import { dog as dogSchema, type Dog } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, 'login');
  const dog: Dog[] = await db.select().from(dogSchema).where(eq(dogSchema.id, params.id));
  if (!dog[0]) return redirect(300, 'dog not found');
  if (dog[0].uid !== user.userId) return fail(401);

  return {
    dog
  };
};
