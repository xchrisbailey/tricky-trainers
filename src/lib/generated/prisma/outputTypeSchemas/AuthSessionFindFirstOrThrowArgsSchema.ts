import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionIncludeSchema } from '../inputTypeSchemas/AuthSessionIncludeSchema';
import { AuthSessionWhereInputSchema } from '../inputTypeSchemas/AuthSessionWhereInputSchema';
import { AuthSessionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthSessionOrderByWithRelationInputSchema';
import { AuthSessionWhereUniqueInputSchema } from '../inputTypeSchemas/AuthSessionWhereUniqueInputSchema';
import { AuthSessionScalarFieldEnumSchema } from '../inputTypeSchemas/AuthSessionScalarFieldEnumSchema';
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

export const AuthSessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthSessionFindFirstOrThrowArgs> =
  z
    .object({
      select: AuthSessionSelectSchema.optional(),
      include: AuthSessionIncludeSchema.optional(),
      where: AuthSessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          AuthSessionOrderByWithRelationInputSchema.array(),
          AuthSessionOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: AuthSessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([AuthSessionScalarFieldEnumSchema, AuthSessionScalarFieldEnumSchema.array()])
        .optional()
    })
    .strict();

export default AuthSessionFindFirstOrThrowArgsSchema;
