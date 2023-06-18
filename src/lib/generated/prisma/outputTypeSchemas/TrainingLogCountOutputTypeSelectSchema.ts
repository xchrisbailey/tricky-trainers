import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TrainingLogCountOutputTypeSelectSchema: z.ZodType<Prisma.TrainingLogCountOutputTypeSelect> = z.object({
  TrainingLogTrick: z.boolean().optional(),
}).strict();

export default TrainingLogCountOutputTypeSelectSchema;
