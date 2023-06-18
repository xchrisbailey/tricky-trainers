import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrickMinOrderByAggregateInputSchema: z.ZodType<Prisma.TrickMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  example: z.lazy(() => SortOrderSchema).optional(),
  difficulty: z.lazy(() => SortOrderSchema).optional(),
  added_by: z.lazy(() => SortOrderSchema).optional(),
  created_on: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TrickMinOrderByAggregateInputSchema;
