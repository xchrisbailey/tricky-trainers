import { db } from '$lib/db';
import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  try {
    const tricks = await db.trick.findMany({});
    if (!tricks) {
      throw fail(400);
    }

    return {
      tricks
    };
  } catch (e) {
    throw fail(400, { e });
  }
};
