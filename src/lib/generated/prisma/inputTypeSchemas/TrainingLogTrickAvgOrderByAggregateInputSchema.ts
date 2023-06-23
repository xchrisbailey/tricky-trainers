import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrainingLogTrickAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingLogTrickAvgOrderByAggregateInput> = z.object({
  understanding: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TrainingLogTrickAvgOrderByAggregateInputSchema;
