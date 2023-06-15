import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TrickCountOrderByAggregateInputObjectSchema } from './TrickCountOrderByAggregateInput.schema';
import { TrickAvgOrderByAggregateInputObjectSchema } from './TrickAvgOrderByAggregateInput.schema';
import { TrickMaxOrderByAggregateInputObjectSchema } from './TrickMaxOrderByAggregateInput.schema';
import { TrickMinOrderByAggregateInputObjectSchema } from './TrickMinOrderByAggregateInput.schema';
import { TrickSumOrderByAggregateInputObjectSchema } from './TrickSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    example: z.lazy(() => SortOrderSchema).optional(),
    difficulty: z.lazy(() => SortOrderSchema).optional(),
    added_by: z.lazy(() => SortOrderSchema).optional(),
    created_on: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TrickCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => TrickAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TrickMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TrickMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TrickSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict();

export const TrickOrderByWithAggregationInputObjectSchema = Schema;
