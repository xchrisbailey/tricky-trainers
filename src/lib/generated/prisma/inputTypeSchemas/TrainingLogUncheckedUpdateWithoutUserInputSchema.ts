import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema } from './TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema';

export const TrainingLogUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dog_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema).optional()
}).strict();

export default TrainingLogUncheckedUpdateWithoutUserInputSchema;
