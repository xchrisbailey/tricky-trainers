import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogWhereInputSchema } from '../inputTypeSchemas/TrainingLogWhereInputSchema';
import { TrainingLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/TrainingLogOrderByWithRelationInputSchema';
import { TrainingLogWhereUniqueInputSchema } from '../inputTypeSchemas/TrainingLogWhereUniqueInputSchema';

export const TrainingLogAggregateArgsSchema: z.ZodType<Prisma.TrainingLogAggregateArgs> = z
  .object({
    where: TrainingLogWhereInputSchema.optional(),
    orderBy: z
      .union([
        TrainingLogOrderByWithRelationInputSchema.array(),
        TrainingLogOrderByWithRelationInputSchema
      ])
      .optional(),
    cursor: TrainingLogWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default TrainingLogAggregateArgsSchema;
