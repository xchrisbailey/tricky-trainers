import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema } from './DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema';
import { TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema } from './TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema';

export const TrainingLogUpdateWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      dog: z.lazy(() => DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema).optional(),
      TrainingLogTrick: z
        .lazy(() => TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema)
        .optional()
    })
    .strict();

export default TrainingLogUpdateWithoutUserInputSchema;
