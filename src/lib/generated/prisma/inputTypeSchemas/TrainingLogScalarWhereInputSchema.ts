import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const TrainingLogScalarWhereInputSchema: z.ZodType<Prisma.TrainingLogScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrainingLogScalarWhereInputSchema),
        z.lazy(() => TrainingLogScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => TrainingLogScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrainingLogScalarWhereInputSchema),
        z.lazy(() => TrainingLogScalarWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    dog_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
  })
  .strict();

export default TrainingLogScalarWhereInputSchema;
