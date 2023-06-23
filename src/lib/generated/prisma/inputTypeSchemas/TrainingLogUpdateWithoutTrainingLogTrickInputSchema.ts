import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema } from './DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema';
import { AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema } from './AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema';

export const TrainingLogUpdateWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrainingLogUpdateWithoutTrainingLogTrickInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dog: z.lazy(() => DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema).optional(),
  user: z.lazy(() => AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema).optional()
}).strict();

export default TrainingLogUpdateWithoutTrainingLogTrickInputSchema;
