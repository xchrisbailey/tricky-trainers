import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DogCountOrderByAggregateInputObjectSchema } from './DogCountOrderByAggregateInput.schema';
import { DogAvgOrderByAggregateInputObjectSchema } from './DogAvgOrderByAggregateInput.schema';
import { DogMaxOrderByAggregateInputObjectSchema } from './DogMaxOrderByAggregateInput.schema';
import { DogMinOrderByAggregateInputObjectSchema } from './DogMinOrderByAggregateInput.schema';
import { DogSumOrderByAggregateInputObjectSchema } from './DogSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    flare: z.lazy(() => SortOrderSchema).optional(),
    breed: z.lazy(() => SortOrderSchema).optional(),
    age_years: z.lazy(() => SortOrderSchema).optional(),
    age_months: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DogCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => DogAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DogMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DogMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DogSumOrderByAggregateInputObjectSchema).optional()
  })
  .strict();

export const DogOrderByWithAggregationInputObjectSchema = Schema;
