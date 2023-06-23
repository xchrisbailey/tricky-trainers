import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrainingLogTrickOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TrainingLogTrickOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TrainingLogTrickOrderByRelationAggregateInputSchema;
