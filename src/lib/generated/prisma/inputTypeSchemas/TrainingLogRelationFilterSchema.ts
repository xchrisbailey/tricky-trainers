import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereInputSchema } from './TrainingLogWhereInputSchema';

export const TrainingLogRelationFilterSchema: z.ZodType<Prisma.TrainingLogRelationFilter> = z.object({
  is: z.lazy(() => TrainingLogWhereInputSchema).optional(),
  isNot: z.lazy(() => TrainingLogWhereInputSchema).optional()
}).strict();

export default TrainingLogRelationFilterSchema;
