import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyIncludeSchema } from '../inputTypeSchemas/AuthKeyIncludeSchema';
import { AuthKeyCreateInputSchema } from '../inputTypeSchemas/AuthKeyCreateInputSchema';
import { AuthKeyUncheckedCreateInputSchema } from '../inputTypeSchemas/AuthKeyUncheckedCreateInputSchema';
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

export const AuthKeyCreateArgsSchema: z.ZodType<Prisma.AuthKeyCreateArgs> = z
  .object({
    select: AuthKeySelectSchema.optional(),
    include: AuthKeyIncludeSchema.optional(),
    data: z.union([AuthKeyCreateInputSchema, AuthKeyUncheckedCreateInputSchema])
  })
  .strict();

export default AuthKeyCreateArgsSchema;
