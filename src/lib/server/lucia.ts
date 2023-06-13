// lib/server/lucia.ts
import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';
import prisma from '@lucia-auth/adapter-prisma';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';

const client = new PrismaClient();

export const auth = lucia({
  adapter: prisma(client),
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  transformDatabaseUser: userData => {
    return { userId: userData.id };
  }
});

export type Auth = typeof auth;
