import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickWhereInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereInputSchema';
import { TrainingLogTrickOrderByWithRelationInputSchema } from '../inputTypeSchemas/TrainingLogTrickOrderByWithRelationInputSchema';
import { TrainingLogTrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereUniqueInputSchema';

export const TrainingLogTrickAggregateArgsSchema: z.ZodType<Prisma.TrainingLogTrickAggregateArgs> =
  z
    .object({
      where: TrainingLogTrickWhereInputSchema.optional(),
      orderBy: z
        .union([
          TrainingLogTrickOrderByWithRelationInputSchema.array(),
          TrainingLogTrickOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: TrainingLogTrickWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict();

export default TrainingLogTrickAggregateArgsSchema;
