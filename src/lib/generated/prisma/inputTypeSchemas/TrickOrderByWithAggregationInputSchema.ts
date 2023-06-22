import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TrickCountOrderByAggregateInputSchema } from './TrickCountOrderByAggregateInputSchema';
import { TrickAvgOrderByAggregateInputSchema } from './TrickAvgOrderByAggregateInputSchema';
import { TrickMaxOrderByAggregateInputSchema } from './TrickMaxOrderByAggregateInputSchema';
import { TrickMinOrderByAggregateInputSchema } from './TrickMinOrderByAggregateInputSchema';
import { TrickSumOrderByAggregateInputSchema } from './TrickSumOrderByAggregateInputSchema';

export const TrickOrderByWithAggregationInputSchema: z.ZodType<Prisma.TrickOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      example: z.lazy(() => SortOrderSchema).optional(),
      difficulty: z.lazy(() => SortOrderSchema).optional(),
      added_by: z.lazy(() => SortOrderSchema).optional(),
      created_on: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => TrickCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => TrickAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TrickMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TrickMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => TrickSumOrderByAggregateInputSchema).optional()
    })
    .strict();

export default TrickOrderByWithAggregationInputSchema;
