import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ locals, request, params }) => {
    const { user } = await locals.auth.validateUser();
    if (!user?.userId) throw error(401, 'must be logged in');

    const dog_id = params.id;

    const data = await request.formData();
  }
} satisfies Actions;
