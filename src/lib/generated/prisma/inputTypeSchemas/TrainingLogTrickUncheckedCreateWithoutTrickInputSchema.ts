import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogTrickUncheckedCreateWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickUncheckedCreateWithoutTrickInput> = z.object({
  log_id: z.string(),
  understanding: z.number().int().optional(),
  notes: z.string().optional().nullable(),
  train_date: z.coerce.date().optional()
}).strict();

export default TrainingLogTrickUncheckedCreateWithoutTrickInputSchema;
