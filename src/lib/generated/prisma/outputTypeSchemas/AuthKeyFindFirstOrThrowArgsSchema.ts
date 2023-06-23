import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyIncludeSchema } from '../inputTypeSchemas/AuthKeyIncludeSchema'
import { AuthKeyWhereInputSchema } from '../inputTypeSchemas/AuthKeyWhereInputSchema'
import { AuthKeyOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthKeyOrderByWithRelationInputSchema'
import { AuthKeyWhereUniqueInputSchema } from '../inputTypeSchemas/AuthKeyWhereUniqueInputSchema'
import { AuthKeyScalarFieldEnumSchema } from '../inputTypeSchemas/AuthKeyScalarFieldEnumSchema'
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthKeySelectSchema: z.ZodType<Prisma.AuthKeySelect> = z.object({
  id: z.boolean().optional(),
  hashed_password: z.boolean().optional(),
  user_id: z.boolean().optional(),
  primary_key: z.boolean().optional(),
  expires: z.boolean().optional(),
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export const AuthKeyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthKeyFindFirstOrThrowArgs> = z.object({
  select: AuthKeySelectSchema.optional(),
  include: AuthKeyIncludeSchema.optional(),
  where: AuthKeyWhereInputSchema.optional(),
  orderBy: z.union([ AuthKeyOrderByWithRelationInputSchema.array(),AuthKeyOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthKeyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthKeyScalarFieldEnumSchema,AuthKeyScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default AuthKeyFindFirstOrThrowArgsSchema;
