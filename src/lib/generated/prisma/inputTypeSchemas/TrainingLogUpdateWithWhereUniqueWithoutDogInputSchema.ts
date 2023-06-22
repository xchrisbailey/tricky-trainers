import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithoutDogInputSchema } from './TrainingLogUpdateWithoutDogInputSchema';
import { TrainingLogUncheckedUpdateWithoutDogInputSchema } from './TrainingLogUncheckedUpdateWithoutDogInputSchema';

export const TrainingLogUpdateWithWhereUniqueWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogUpdateWithWhereUniqueWithoutDogInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TrainingLogUpdateWithoutDogInputSchema),
        z.lazy(() => TrainingLogUncheckedUpdateWithoutDogInputSchema)
      ])
    })
    .strict();

export default TrainingLogUpdateWithWhereUniqueWithoutDogInputSchema;
