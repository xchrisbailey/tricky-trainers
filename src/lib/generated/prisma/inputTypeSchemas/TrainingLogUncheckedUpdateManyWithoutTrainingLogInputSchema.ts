import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const TrainingLogUncheckedUpdateManyWithoutTrainingLogInputSchema: z.ZodType<Prisma.TrainingLogUncheckedUpdateManyWithoutTrainingLogInput> =
  z
    .object({
      id: z
        .union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      dog_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict();

export default TrainingLogUncheckedUpdateManyWithoutTrainingLogInputSchema;
