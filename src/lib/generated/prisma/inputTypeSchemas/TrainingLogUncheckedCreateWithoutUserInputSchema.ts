import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema';

export const TrainingLogUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      dog_id: z.string(),
      TrainingLogTrick: z
        .lazy(() => TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema)
        .optional()
    })
    .strict();

export default TrainingLogUncheckedCreateWithoutUserInputSchema;
