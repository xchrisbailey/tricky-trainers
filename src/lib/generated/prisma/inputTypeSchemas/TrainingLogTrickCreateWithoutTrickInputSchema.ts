import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema';

export const TrainingLogTrickCreateWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateWithoutTrickInput> =
  z
    .object({
      understanding: z.number().int().optional(),
      notes: z.string().optional().nullable(),
      train_date: z.coerce.date().optional(),
      training_log: z.lazy(() => TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema)
    })
    .strict();

export default TrainingLogTrickCreateWithoutTrickInputSchema;
