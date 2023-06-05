import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db';
import { user } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
  const { user: authUser } = await locals.auth.validateUser();
  if (!authUser) return redirect(300, 'login');

  const currentUser = await db.query.user.findFirst({
    where: eq(user.id, authUser.userId),
    with: { dogs: true }
  });

  console.log(currentUser);
};
