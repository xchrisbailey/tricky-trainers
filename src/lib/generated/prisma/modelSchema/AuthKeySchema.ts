import { z } from 'zod';

/////////////////////////////////////////
// AUTH KEY SCHEMA
/////////////////////////////////////////

export const AuthKeySchema = z.object({
  id: z.string(),
  hashed_password: z.string().nullable(),
  user_id: z.string(),
  primary_key: z.boolean(),
  expires: z.bigint().nullable()
});

export type AuthKey = z.infer<typeof AuthKeySchema>;

export default AuthKeySchema;
