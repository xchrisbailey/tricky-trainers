import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateWithoutTrainingLogTrickInputSchema';
import { TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema';
import { TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';

export const TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrainingLogCreateNestedOneWithoutTrainingLogTrickInput> =
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
      connect: z.lazy(() => TrainingLogWhereUniqueInputSchema).optional()
    })
    .strict();

export default TrainingLogCreateNestedOneWithoutTrainingLogTrickInputSchema;
