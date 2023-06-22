import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickScalarWhereInputSchema } from './TrainingLogTrickScalarWhereInputSchema';
import { TrainingLogTrickUpdateManyMutationInputSchema } from './TrainingLogTrickUpdateManyMutationInputSchema';
import { TrainingLogTrickUncheckedUpdateManyWithoutTrainingLogTrickInputSchema } from './TrainingLogTrickUncheckedUpdateManyWithoutTrainingLogTrickInputSchema';

export const TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogTrickScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TrainingLogTrickUpdateManyMutationInputSchema),
        z.lazy(() => TrainingLogTrickUncheckedUpdateManyWithoutTrainingLogTrickInputSchema)
      ])
    })
    .strict();

export default TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInputSchema;
