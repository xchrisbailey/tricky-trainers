import { db } from '$lib/db';
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { error, fail } from '@sveltejs/kit';
import { new_trick_schema } from '$lib/schemas/trick';

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
