import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserWhereInputSchema } from '../inputTypeSchemas/AuthUserWhereInputSchema'
import { AuthUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthUserOrderByWithRelationInputSchema'
import { AuthUserWhereUniqueInputSchema } from '../inputTypeSchemas/AuthUserWhereUniqueInputSchema'

export const AuthUserAggregateArgsSchema: z.ZodType<Prisma.AuthUserAggregateArgs> = z.object({
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithRelationInputSchema.array(),AuthUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default AuthUserAggregateArgsSchema;
