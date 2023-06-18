import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogCreateManyDogInputSchema: z.ZodType<Prisma.TrainingLogCreateManyDogInput> = z.object({
  id: z.string().cuid().optional(),
  user_id: z.string()
}).strict();

export default TrainingLogCreateManyDogInputSchema;
