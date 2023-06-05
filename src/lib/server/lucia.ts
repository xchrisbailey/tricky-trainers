// lib/server/lucia.ts
import { dev } from '$app/environment';
import { connectionPool } from '$lib/db';
import { pg } from '@lucia-auth/adapter-postgresql';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';

export const auth = lucia({
  adapter: pg(connectionPool),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  transformDatabaseUser: userData => {
    return { userId: userData.id };
  }
});

export type Auth = typeof auth;
