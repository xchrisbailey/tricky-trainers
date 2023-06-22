import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateNestedOneWithoutTrainingLogTrickInputSchema } from './TrickCreateNestedOneWithoutTrainingLogTrickInputSchema';
import { TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema';

export const TrainingLogTrickCreateInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateInput> = z
  .object({
    understanding: z.number().int().optional(),
    notes: z.string().optional().nullable(),
    train_date: z.coerce.date().optional(),
    trick: z.lazy(() => TrickCreateNestedOneWithoutTrainingLogTrickInputSchema),
    training_log: z.lazy(() => TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema)
  })
  .strict();

export default TrainingLogTrickCreateInputSchema;
