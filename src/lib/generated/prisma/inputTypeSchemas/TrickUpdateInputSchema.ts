import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AuthUserUpdateOneWithoutTricksNestedInputSchema } from './AuthUserUpdateOneWithoutTricksNestedInputSchema';
import { TrainingLogTrickUpdateManyWithoutTrickNestedInputSchema } from './TrainingLogTrickUpdateManyWithoutTrickNestedInputSchema';

export const TrickUpdateInputSchema: z.ZodType<Prisma.TrickUpdateInput> = z
  .object({
    id: z
      .union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    example: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    difficulty: z
      .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)])
      .optional(),
    created_on: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)])
      .optional(),
    User: z.lazy(() => AuthUserUpdateOneWithoutTricksNestedInputSchema).optional(),
    TrainingLogTrick: z
      .lazy(() => TrainingLogTrickUpdateManyWithoutTrickNestedInputSchema)
      .optional()
  })
  .strict();

export default TrickUpdateInputSchema;
