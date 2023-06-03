import { db } from '$lib/db';
import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

await migrate(db, { migrationsFolder: './drizzle' });

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = auth.handleRequest(event);
  return await resolve(event);
};
