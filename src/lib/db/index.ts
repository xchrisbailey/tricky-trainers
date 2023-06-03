import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const connectionPool = new Pool({
  connectionString: process.env.DB_URL ?? ''
});

export const db = drizzle(connectionPool);
