import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogTrickCreateManyTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateManyTraining_logInput> = z.object({
  trick_id: z.string(),
  understanding: z.number().int().optional(),
  notes: z.string().optional().nullable(),
  train_date: z.coerce.date().optional()
}).strict();

export default TrainingLogTrickCreateManyTraining_logInputSchema;
