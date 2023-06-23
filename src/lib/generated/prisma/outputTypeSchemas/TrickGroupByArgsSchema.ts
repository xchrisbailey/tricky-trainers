import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickWhereInputSchema } from '../inputTypeSchemas/TrickWhereInputSchema'
import { TrickOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TrickOrderByWithAggregationInputSchema'
import { TrickScalarFieldEnumSchema } from '../inputTypeSchemas/TrickScalarFieldEnumSchema'
import { TrickScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TrickScalarWhereWithAggregatesInputSchema'

export const TrickGroupByArgsSchema: z.ZodType<Prisma.TrickGroupByArgs> = z.object({
  where: TrickWhereInputSchema.optional(),
  orderBy: z.union([ TrickOrderByWithAggregationInputSchema.array(),TrickOrderByWithAggregationInputSchema ]).optional(),
  by: TrickScalarFieldEnumSchema.array(),
  having: TrickScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default TrickGroupByArgsSchema;
