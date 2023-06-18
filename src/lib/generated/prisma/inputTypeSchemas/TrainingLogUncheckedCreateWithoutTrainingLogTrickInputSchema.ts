import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrainingLogUncheckedCreateWithoutTrainingLogTrickInput> = z.object({
  id: z.string().cuid().optional(),
  dog_id: z.string(),
  user_id: z.string()
}).strict();

export default TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema;
