import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TrainingLogTrickUncheckedUpdateManyWithoutTrickNestedInputSchema } from './TrainingLogTrickUncheckedUpdateManyWithoutTrickNestedInputSchema';

export const TrickUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TrickUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  example: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  difficulty: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_on: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickUncheckedUpdateManyWithoutTrickNestedInputSchema).optional()
}).strict();

export default TrickUncheckedUpdateWithoutUserInputSchema;
