import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickCreateManyInputSchema } from '../inputTypeSchemas/TrainingLogTrickCreateManyInputSchema';

export const TrainingLogTrickCreateManyArgsSchema: z.ZodType<Prisma.TrainingLogTrickCreateManyArgs> =
  z
    .object({
      data: z.union([
        TrainingLogTrickCreateManyInputSchema,
        TrainingLogTrickCreateManyInputSchema.array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export default TrainingLogTrickCreateManyArgsSchema;
