import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"

export const AuthKeySelectSchema: z.ZodType<Prisma.AuthKeySelect> = z.object({
  id: z.boolean().optional(),
  hashed_password: z.boolean().optional(),
  user_id: z.boolean().optional(),
  primary_key: z.boolean().optional(),
  expires: z.boolean().optional(),
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export default AuthKeySelectSchema;
