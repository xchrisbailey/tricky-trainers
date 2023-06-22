import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateNestedOneWithoutTrainingLogTrickInputSchema } from './TrickCreateNestedOneWithoutTrainingLogTrickInputSchema';

export const TrainingLogTrickCreateWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateWithoutTraining_logInput> =
  z
    .object({
      understanding: z.number().int().optional(),
      notes: z.string().optional().nullable(),
      train_date: z.coerce.date().optional(),
      trick: z.lazy(() => TrickCreateNestedOneWithoutTrainingLogTrickInputSchema)
    })
    .strict();

export default TrainingLogTrickCreateWithoutTraining_logInputSchema;
