import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrickSumOrderByAggregateInputSchema: z.ZodType<Prisma.TrickSumOrderByAggregateInput> = z.object({
  difficulty: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TrickSumOrderByAggregateInputSchema;
