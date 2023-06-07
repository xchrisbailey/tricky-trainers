import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { dog as dogSchema, type Dog } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, 'login');
  const dog = await db.select().from(dogSchema).where(eq(dogSchema.id, params.id));
  if (dog[0].uid !== user.userId) throw error(401, 'not your puppers');
  if (!dog[0]) throw error(500, 'dog not found');

  return {
    dog: dog[0]
  };
};
