import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogTrickCreateManyInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateManyInput> =
  z
    .object({
      trick_id: z.string(),
      log_id: z.string(),
      understanding: z.number().int().optional(),
      notes: z.string().optional().nullable(),
      train_date: z.coerce.date().optional()
    })
    .strict();

export default TrainingLogTrickCreateManyInputSchema;
