import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogWhereUniqueInputSchema: z.ZodType<Prisma.TrainingLogWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export default TrainingLogWhereUniqueInputSchema;
