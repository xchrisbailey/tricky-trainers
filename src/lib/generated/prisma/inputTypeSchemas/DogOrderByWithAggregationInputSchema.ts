import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DogCountOrderByAggregateInputSchema } from './DogCountOrderByAggregateInputSchema';
import { DogAvgOrderByAggregateInputSchema } from './DogAvgOrderByAggregateInputSchema';
import { DogMaxOrderByAggregateInputSchema } from './DogMaxOrderByAggregateInputSchema';
import { DogMinOrderByAggregateInputSchema } from './DogMinOrderByAggregateInputSchema';
import { DogSumOrderByAggregateInputSchema } from './DogSumOrderByAggregateInputSchema';

export const DogOrderByWithAggregationInputSchema: z.ZodType<Prisma.DogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  flare: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  age_years: z.lazy(() => SortOrderSchema).optional(),
  age_months: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DogSumOrderByAggregateInputSchema).optional()
}).strict();

export default DogOrderByWithAggregationInputSchema;
