import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserWhereInputSchema } from '../inputTypeSchemas/AuthUserWhereInputSchema'
import { AuthUserOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AuthUserOrderByWithAggregationInputSchema'
import { AuthUserScalarFieldEnumSchema } from '../inputTypeSchemas/AuthUserScalarFieldEnumSchema'
import { AuthUserScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AuthUserScalarWhereWithAggregatesInputSchema'

export const AuthUserGroupByArgsSchema: z.ZodType<Prisma.AuthUserGroupByArgs> = z.object({
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithAggregationInputSchema.array(),AuthUserOrderByWithAggregationInputSchema ]).optional(),
  by: AuthUserScalarFieldEnumSchema.array(),
  having: AuthUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default AuthUserGroupByArgsSchema;
