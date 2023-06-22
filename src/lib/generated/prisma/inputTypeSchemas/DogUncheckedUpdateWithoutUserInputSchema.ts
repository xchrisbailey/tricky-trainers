import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TrainingLogUncheckedUpdateManyWithoutDogNestedInputSchema } from './TrainingLogUncheckedUpdateManyWithoutDogNestedInputSchema';

export const DogUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.DogUncheckedUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      flare: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      breed: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      age_years: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      age_months: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
        .optional(),
      TrainingLog: z
        .lazy(() => TrainingLogUncheckedUpdateManyWithoutDogNestedInputSchema)
        .optional()
    })
    .strict();

export default DogUncheckedUpdateWithoutUserInputSchema;
