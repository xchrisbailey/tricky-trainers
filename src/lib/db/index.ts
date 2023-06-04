import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DB_URL } from '$env/static/private';

export const connectionPool = new Pool({
  connectionString: DB_URL
});

export const db = drizzle(connectionPool);
