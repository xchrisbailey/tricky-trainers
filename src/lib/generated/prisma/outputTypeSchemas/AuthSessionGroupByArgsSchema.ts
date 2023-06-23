import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionWhereInputSchema } from '../inputTypeSchemas/AuthSessionWhereInputSchema'
import { AuthSessionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AuthSessionOrderByWithAggregationInputSchema'
import { AuthSessionScalarFieldEnumSchema } from '../inputTypeSchemas/AuthSessionScalarFieldEnumSchema'
import { AuthSessionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AuthSessionScalarWhereWithAggregatesInputSchema'

export const AuthSessionGroupByArgsSchema: z.ZodType<Prisma.AuthSessionGroupByArgs> = z.object({
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithAggregationInputSchema.array(),AuthSessionOrderByWithAggregationInputSchema ]).optional(),
  by: AuthSessionScalarFieldEnumSchema.array(),
  having: AuthSessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default AuthSessionGroupByArgsSchema;
