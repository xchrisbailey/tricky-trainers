import { z } from 'zod';

/////////////////////////////////////////
// AUTH SESSION SCHEMA
/////////////////////////////////////////

export const AuthSessionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
});

export type AuthSession = z.infer<typeof AuthSessionSchema>;

export default AuthSessionSchema;
