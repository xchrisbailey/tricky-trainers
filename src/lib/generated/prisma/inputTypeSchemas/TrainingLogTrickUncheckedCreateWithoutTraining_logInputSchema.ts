import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickUncheckedCreateWithoutTraining_logInput> =
  z
    .object({
      trick_id: z.string(),
      understanding: z.number().int().optional(),
      notes: z.string().optional().nullable(),
      train_date: z.coerce.date().optional()
    })
    .strict();

export default TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema;
