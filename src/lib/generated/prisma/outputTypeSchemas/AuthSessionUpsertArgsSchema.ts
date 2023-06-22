import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionIncludeSchema } from '../inputTypeSchemas/AuthSessionIncludeSchema';
import { AuthSessionWhereUniqueInputSchema } from '../inputTypeSchemas/AuthSessionWhereUniqueInputSchema';
import { AuthSessionCreateInputSchema } from '../inputTypeSchemas/AuthSessionCreateInputSchema';
import { AuthSessionUncheckedCreateInputSchema } from '../inputTypeSchemas/AuthSessionUncheckedCreateInputSchema';
import { AuthSessionUpdateInputSchema } from '../inputTypeSchemas/AuthSessionUpdateInputSchema';
import { AuthSessionUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuthSessionUncheckedUpdateInputSchema';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthSessionSelectSchema: z.ZodType<Prisma.AuthSessionSelect> = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    active_expires: z.boolean().optional(),
    idle_expires: z.boolean().optional(),
    auth_user: z.union([z.boolean(), z.lazy(() => AuthUserArgsSchema)]).optional()
  })
  .strict();

export const AuthSessionUpsertArgsSchema: z.ZodType<Prisma.AuthSessionUpsertArgs> = z
  .object({
    select: AuthSessionSelectSchema.optional(),
    include: AuthSessionIncludeSchema.optional(),
    where: AuthSessionWhereUniqueInputSchema,
    create: z.union([AuthSessionCreateInputSchema, AuthSessionUncheckedCreateInputSchema]),
    update: z.union([AuthSessionUpdateInputSchema, AuthSessionUncheckedUpdateInputSchema])
  })
  .strict();

export default AuthSessionUpsertArgsSchema;
