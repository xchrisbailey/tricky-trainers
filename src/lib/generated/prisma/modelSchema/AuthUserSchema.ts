import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// AUTH USER SCHEMA
/////////////////////////////////////////

export const AuthUserSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
})

export type AuthUser = z.infer<typeof AuthUserSchema>

export default AuthUserSchema;
