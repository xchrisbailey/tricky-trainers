import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickWhereInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereInputSchema';
import { TrainingLogTrickOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TrainingLogTrickOrderByWithAggregationInputSchema';
import { TrainingLogTrickScalarFieldEnumSchema } from '../inputTypeSchemas/TrainingLogTrickScalarFieldEnumSchema';
import { TrainingLogTrickScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TrainingLogTrickScalarWhereWithAggregatesInputSchema';

export const TrainingLogTrickGroupByArgsSchema: z.ZodType<Prisma.TrainingLogTrickGroupByArgs> = z
  .object({
    where: TrainingLogTrickWhereInputSchema.optional(),
    orderBy: z
      .union([
        TrainingLogTrickOrderByWithAggregationInputSchema.array(),
        TrainingLogTrickOrderByWithAggregationInputSchema
      ])
      .optional(),
    by: TrainingLogTrickScalarFieldEnumSchema.array(),
    having: TrainingLogTrickScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default TrainingLogTrickGroupByArgsSchema;
