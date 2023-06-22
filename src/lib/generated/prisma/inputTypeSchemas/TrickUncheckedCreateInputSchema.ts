import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema } from './TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema';

export const TrickUncheckedCreateInputSchema: z.ZodType<Prisma.TrickUncheckedCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    name: z.string(),
    description: z.string(),
    example: z.string(),
    difficulty: z.number().int(),
    added_by: z.string(),
    created_on: z.coerce.date().optional(),
    TrainingLogTrick: z
      .lazy(() => TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema)
      .optional()
  })
  .strict();

export default TrickUncheckedCreateInputSchema;
