import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async ({ locals }) => {
  const { user: authUser } = await locals.auth.validateUser();
  if (!authUser) return redirect(300, 'login');

  const current_user = await db.authUser.findFirst({
    where: { id: authUser.userId },
    include: {
      dogs: true
    }
  });

  console.log(current_user);

  return {
    user: current_user
  };
};
