import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyIncludeSchema } from '../inputTypeSchemas/AuthKeyIncludeSchema';
import { AuthKeyWhereUniqueInputSchema } from '../inputTypeSchemas/AuthKeyWhereUniqueInputSchema';
import { AuthKeyCreateInputSchema } from '../inputTypeSchemas/AuthKeyCreateInputSchema';
import { AuthKeyUncheckedCreateInputSchema } from '../inputTypeSchemas/AuthKeyUncheckedCreateInputSchema';
import { AuthKeyUpdateInputSchema } from '../inputTypeSchemas/AuthKeyUpdateInputSchema';
import { AuthKeyUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuthKeyUncheckedUpdateInputSchema';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthKeySelectSchema: z.ZodType<Prisma.AuthKeySelect> = z
  .object({
    id: z.boolean().optional(),
    hashed_password: z.boolean().optional(),
    user_id: z.boolean().optional(),
    primary_key: z.boolean().optional(),
    expires: z.boolean().optional(),
    auth_user: z.union([z.boolean(), z.lazy(() => AuthUserArgsSchema)]).optional()
  })
  .strict();

export const AuthKeyUpsertArgsSchema: z.ZodType<Prisma.AuthKeyUpsertArgs> = z
  .object({
    select: AuthKeySelectSchema.optional(),
    include: AuthKeyIncludeSchema.optional(),
    where: AuthKeyWhereUniqueInputSchema,
    create: z.union([AuthKeyCreateInputSchema, AuthKeyUncheckedCreateInputSchema]),
    update: z.union([AuthKeyUpdateInputSchema, AuthKeyUncheckedUpdateInputSchema])
  })
  .strict();

export default AuthKeyUpsertArgsSchema;
