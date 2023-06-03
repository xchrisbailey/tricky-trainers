import postgres from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export const connectionPool = new postgres.Pool({
  connectionString: process.env.DB_URL ?? ''
});

export const db = drizzle(connectionPool);
