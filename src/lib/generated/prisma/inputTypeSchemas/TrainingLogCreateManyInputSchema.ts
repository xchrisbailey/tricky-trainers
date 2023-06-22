import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogCreateManyInputSchema: z.ZodType<Prisma.TrainingLogCreateManyInput> = z
  .object({
    id: z.string().cuid().optional(),
    dog_id: z.string(),
    user_id: z.string()
  })
  .strict();

export default TrainingLogCreateManyInputSchema;
