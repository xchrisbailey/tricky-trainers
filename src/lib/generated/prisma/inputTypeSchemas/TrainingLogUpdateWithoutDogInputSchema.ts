import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema } from './AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema';
import { TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema } from './TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema';

export const TrainingLogUpdateWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogUpdateWithoutDogInput> =
  z
    .object({
      id: z
        .union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      user: z.lazy(() => AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema).optional(),
      TrainingLogTrick: z
        .lazy(() => TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema)
        .optional()
    })
    .strict();

export default TrainingLogUpdateWithoutDogInputSchema;
