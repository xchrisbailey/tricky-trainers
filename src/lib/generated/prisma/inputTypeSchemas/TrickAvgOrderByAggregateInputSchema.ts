import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrickAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TrickAvgOrderByAggregateInput> = z.object({
  difficulty: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TrickAvgOrderByAggregateInputSchema;
