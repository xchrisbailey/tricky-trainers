import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema } from './TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema';

export const TrainingLogTrickUpdateWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateWithoutTraining_logInput> = z.object({
  understanding: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  train_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  trick: z.lazy(() => TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema).optional()
}).strict();

export default TrainingLogTrickUpdateWithoutTraining_logInputSchema;
