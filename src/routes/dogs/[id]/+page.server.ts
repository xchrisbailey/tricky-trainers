import { db } from '$lib/db';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { Dog } from '@prisma/client';

export const load: PageServerLoad = async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) return redirect(300, 'login');

  const dog: Dog | null = await db.dog.findFirst({
    where: {
      id: params.id
    }
  });

  if (!dog) {
    return redirect(300, 'dog not found');
  } else if (dog.user_id !== user.userId) {
    throw error(401, 'not your puppers');
  }

  return {
    dog
  };
};

export const actions = {
  delete: async ({ params, locals }) => {
    const { user } = await locals.auth.validateUser();
    if (!user) return redirect(300, 'login');

    try {
      await db.dog.delete({ where: { id: params.id } });
      return {
        success: true
      };
    } catch (e) {
      return fail(400, { e });
    }
  }
} satisfies Actions;
