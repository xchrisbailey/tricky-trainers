import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogCreateManyUserInputSchema: z.ZodType<Prisma.TrainingLogCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  dog_id: z.string()
}).strict();

export default TrainingLogCreateManyUserInputSchema;
