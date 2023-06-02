// lib/server/lucia.ts
import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import { dev } from "$app/environment";
import { connectionPool } from "$lib/db";
import { pg } from "@lucia-auth/adapter-postgresql";

export const auth = lucia({
  adapter: pg(connectionPool),
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
});

export type Auth = typeof auth;
