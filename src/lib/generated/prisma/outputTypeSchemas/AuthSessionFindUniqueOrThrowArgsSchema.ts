import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionIncludeSchema } from '../inputTypeSchemas/AuthSessionIncludeSchema'
import { AuthSessionWhereUniqueInputSchema } from '../inputTypeSchemas/AuthSessionWhereUniqueInputSchema'
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

export const AuthSessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthSessionFindUniqueOrThrowArgs> = z.object({
  select: AuthSessionSelectSchema.optional(),
  include: AuthSessionIncludeSchema.optional(),
  where: AuthSessionWhereUniqueInputSchema,
}).strict()

export default AuthSessionFindUniqueOrThrowArgsSchema;
