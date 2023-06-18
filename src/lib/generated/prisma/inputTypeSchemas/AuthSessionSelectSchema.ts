import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"

export const AuthSessionSelectSchema: z.ZodType<Prisma.AuthSessionSelect> = z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  active_expires: z.boolean().optional(),
  idle_expires: z.boolean().optional(),
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export default AuthSessionSelectSchema;
