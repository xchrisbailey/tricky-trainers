import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogScalarWhereInputSchema } from './TrainingLogScalarWhereInputSchema';
import { TrainingLogUpdateManyMutationInputSchema } from './TrainingLogUpdateManyMutationInputSchema';
import { TrainingLogUncheckedUpdateManyWithoutTrainingLogInputSchema } from './TrainingLogUncheckedUpdateManyWithoutTrainingLogInputSchema';

export const TrainingLogUpdateManyWithWhereWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogUpdateManyWithWhereWithoutDogInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TrainingLogUpdateManyMutationInputSchema),
        z.lazy(() => TrainingLogUncheckedUpdateManyWithoutTrainingLogInputSchema)
      ])
    })
    .strict();

export default TrainingLogUpdateManyWithWhereWithoutDogInputSchema;
