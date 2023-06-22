import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogCreateWithoutDogInputSchema } from './TrainingLogCreateWithoutDogInputSchema';
import { TrainingLogUncheckedCreateWithoutDogInputSchema } from './TrainingLogUncheckedCreateWithoutDogInputSchema';

export const TrainingLogCreateOrConnectWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogCreateOrConnectWithoutDogInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TrainingLogCreateWithoutDogInputSchema),
        z.lazy(() => TrainingLogUncheckedCreateWithoutDogInputSchema)
      ])
    })
    .strict();

export default TrainingLogCreateOrConnectWithoutDogInputSchema;
