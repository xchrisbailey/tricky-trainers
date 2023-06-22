import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogWhereInputSchema } from '../inputTypeSchemas/TrainingLogWhereInputSchema';
import { TrainingLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TrainingLogOrderByWithAggregationInputSchema';
import { TrainingLogScalarFieldEnumSchema } from '../inputTypeSchemas/TrainingLogScalarFieldEnumSchema';
import { TrainingLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TrainingLogScalarWhereWithAggregatesInputSchema';

export const TrainingLogGroupByArgsSchema: z.ZodType<Prisma.TrainingLogGroupByArgs> = z
  .object({
    where: TrainingLogWhereInputSchema.optional(),
    orderBy: z
      .union([
        TrainingLogOrderByWithAggregationInputSchema.array(),
        TrainingLogOrderByWithAggregationInputSchema
      ])
      .optional(),
    by: TrainingLogScalarFieldEnumSchema.array(),
    having: TrainingLogScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default TrainingLogGroupByArgsSchema;
