import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrickOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TrickOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TrickOrderByRelationAggregateInputSchema;
