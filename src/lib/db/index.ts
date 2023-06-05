import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DB_URL } from '$env/static/private';
import * as schema from './schema';

export const connectionPool = new Pool({
  connectionString: DB_URL
});

export const db = drizzle(connectionPool, { schema, logger: true });
