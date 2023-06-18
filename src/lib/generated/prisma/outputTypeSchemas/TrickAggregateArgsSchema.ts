import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickWhereInputSchema } from '../inputTypeSchemas/TrickWhereInputSchema'
import { TrickOrderByWithRelationInputSchema } from '../inputTypeSchemas/TrickOrderByWithRelationInputSchema'
import { TrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrickWhereUniqueInputSchema'

export const TrickAggregateArgsSchema: z.ZodType<Prisma.TrickAggregateArgs> = z.object({
  where: TrickWhereInputSchema.optional(),
  orderBy: z.union([ TrickOrderByWithRelationInputSchema.array(),TrickOrderByWithRelationInputSchema ]).optional(),
  cursor: TrickWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TrickAggregateArgsSchema;
