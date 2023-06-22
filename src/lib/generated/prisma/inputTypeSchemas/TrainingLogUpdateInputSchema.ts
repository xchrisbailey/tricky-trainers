import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema } from './DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema';
import { AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema } from './AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema';
import { TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema } from './TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema';

export const TrainingLogUpdateInputSchema: z.ZodType<Prisma.TrainingLogUpdateInput> = z
  .object({
    id: z
      .union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dog: z.lazy(() => DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema).optional(),
    user: z.lazy(() => AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema).optional(),
    TrainingLogTrick: z
      .lazy(() => TrainingLogTrickUpdateManyWithoutTraining_logNestedInputSchema)
      .optional()
  })
  .strict();

export default TrainingLogUpdateInputSchema;
