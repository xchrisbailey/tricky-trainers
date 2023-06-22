import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogUpdateWithoutTrainingLogTrickInputSchema } from './TrainingLogUpdateWithoutTrainingLogTrickInputSchema';
import { TrainingLogUncheckedUpdateWithoutTrainingLogTrickInputSchema } from './TrainingLogUncheckedUpdateWithoutTrainingLogTrickInputSchema';
import { TrainingLogCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateWithoutTrainingLogTrickInputSchema';
import { TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema';

export const TrainingLogUpsertWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrainingLogUpsertWithoutTrainingLogTrickInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TrainingLogUpdateWithoutTrainingLogTrickInputSchema),
        z.lazy(() => TrainingLogUncheckedUpdateWithoutTrainingLogTrickInputSchema)
      ]),
      create: z.union([
        z.lazy(() => TrainingLogCreateWithoutTrainingLogTrickInputSchema),
        z.lazy(() => TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema)
      ])
    })
    .strict();

export default TrainingLogUpsertWithoutTrainingLogTrickInputSchema;
