import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
  const { user: authUser } = await locals.auth.validateUser();
  if (!authUser) throw redirect(300, 'login');

  const current_user = await db.authUser.findFirst({
    where: { id: authUser.userId },
    include: {
      dogs: true
    }
  });

  return {
    user: current_user
  };
};
