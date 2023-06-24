import { db } from '$lib/db';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  try {
    const tricks = await db.trick.findMany({});
    if (!tricks) {
      throw redirect(300, 'tricks not found');
    }

    return {
      tricks
    };
  } catch (e) {
    return fail(400, { e });
  }
};
