import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TrickCountOutputTypeSelectSchema: z.ZodType<Prisma.TrickCountOutputTypeSelect> = z.object({
  TrainingLogTrick: z.boolean().optional(),
}).strict();

export default TrickCountOutputTypeSelectSchema;
