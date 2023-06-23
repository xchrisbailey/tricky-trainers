import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionWhereInputSchema } from '../inputTypeSchemas/AuthSessionWhereInputSchema'
import { AuthSessionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthSessionOrderByWithRelationInputSchema'
import { AuthSessionWhereUniqueInputSchema } from '../inputTypeSchemas/AuthSessionWhereUniqueInputSchema'

export const AuthSessionAggregateArgsSchema: z.ZodType<Prisma.AuthSessionAggregateArgs> = z.object({
  where: AuthSessionWhereInputSchema.optional(),
  orderBy: z.union([ AuthSessionOrderByWithRelationInputSchema.array(),AuthSessionOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthSessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default AuthSessionAggregateArgsSchema;
