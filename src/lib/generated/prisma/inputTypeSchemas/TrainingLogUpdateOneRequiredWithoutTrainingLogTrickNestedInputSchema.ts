import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateWithoutTrainingLogTrickInputSchema';
import { TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema';
import { TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema';
import { TrainingLogUpsertWithoutTrainingLogTrickInputSchema } from './TrainingLogUpsertWithoutTrainingLogTrickInputSchema';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithoutTrainingLogTrickInputSchema } from './TrainingLogUpdateWithoutTrainingLogTrickInputSchema';
import { TrainingLogUncheckedUpdateWithoutTrainingLogTrickInputSchema } from './TrainingLogUncheckedUpdateWithoutTrainingLogTrickInputSchema';

export const TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema: z.ZodType<Prisma.TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrainingLogCreateWithoutTrainingLogTrickInputSchema),
          z.lazy(() => TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema)
        .optional(),
      upsert: z.lazy(() => TrainingLogUpsertWithoutTrainingLogTrickInputSchema).optional(),
      connect: z.lazy(() => TrainingLogWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => TrainingLogUpdateWithoutTrainingLogTrickInputSchema),
          z.lazy(() => TrainingLogUncheckedUpdateWithoutTrainingLogTrickInputSchema)
        ])
        .optional()
    })
    .strict();

export default TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema;
