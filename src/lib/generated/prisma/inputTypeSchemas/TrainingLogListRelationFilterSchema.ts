import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereInputSchema } from './TrainingLogWhereInputSchema';

export const TrainingLogListRelationFilterSchema: z.ZodType<Prisma.TrainingLogListRelationFilter> = z.object({
  every: z.lazy(() => TrainingLogWhereInputSchema).optional(),
  some: z.lazy(() => TrainingLogWhereInputSchema).optional(),
  none: z.lazy(() => TrainingLogWhereInputSchema).optional()
}).strict();

export default TrainingLogListRelationFilterSchema;
