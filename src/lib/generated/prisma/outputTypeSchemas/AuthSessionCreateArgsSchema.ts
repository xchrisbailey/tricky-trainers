import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionIncludeSchema } from '../inputTypeSchemas/AuthSessionIncludeSchema'
import { AuthSessionCreateInputSchema } from '../inputTypeSchemas/AuthSessionCreateInputSchema'
import { AuthSessionUncheckedCreateInputSchema } from '../inputTypeSchemas/AuthSessionUncheckedCreateInputSchema'
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthSessionSelectSchema: z.ZodType<Prisma.AuthSessionSelect> = z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  active_expires: z.boolean().optional(),
  idle_expires: z.boolean().optional(),
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export const AuthSessionCreateArgsSchema: z.ZodType<Prisma.AuthSessionCreateArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  data: z.union([ AuthSessionCreateInputSchema,AuthSessionUncheckedCreateInputSchema ]),
}).strict()

export default AuthSessionCreateArgsSchema;
