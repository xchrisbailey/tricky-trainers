import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema } from './TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema';
import { TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema } from './TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema';

export const TrainingLogTrickUpdateInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateInput> = z.object({
  understanding: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  trick: z.lazy(() => TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema).optional(),
  training_log: z.lazy(() => TrainingLogUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema).optional()
}).strict();

export default TrainingLogTrickUpdateInputSchema;
