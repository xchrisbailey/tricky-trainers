import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema } from './TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema';

export const TrainingLogTrickUpdateWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateWithoutTrickInput> = z.object({
  understanding: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  train_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  training_log: z.lazy(() => TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema).optional()
}).strict();

export default TrainingLogTrickUpdateWithoutTrickInputSchema;
