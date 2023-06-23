import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema } from './TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema';

export const TrainingLogUncheckedUpdateWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogUncheckedUpdateWithoutDogInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema).optional()
}).strict();

export default TrainingLogUncheckedUpdateWithoutDogInputSchema;
