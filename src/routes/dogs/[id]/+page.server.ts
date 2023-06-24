import { db } from '$lib/db';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) throw redirect(300, 'please login');

  const dog = await db.dog.findUnique({
    where: {
      id: params.id
    },
    include: {
      TrainingLog: {
        include: {
          TrainingLogTrick: {
            include: {
              trick: true
            }
          }
        }
      }
    }
  });

  if (!dog || dog === undefined) {
    throw redirect(300, 'dog not found');
  } else if (dog.user_id !== user.userId) {
    throw redirect(300, 'not your doggo');
  }

  return {
    dog
  };
}) satisfies PageServerLoad;

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
