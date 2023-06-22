import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TrainingLogCountOrderByAggregateInputSchema } from './TrainingLogCountOrderByAggregateInputSchema';
import { TrainingLogMaxOrderByAggregateInputSchema } from './TrainingLogMaxOrderByAggregateInputSchema';
import { TrainingLogMinOrderByAggregateInputSchema } from './TrainingLogMinOrderByAggregateInputSchema';

export const TrainingLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.TrainingLogOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      dog_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => TrainingLogCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TrainingLogMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TrainingLogMinOrderByAggregateInputSchema).optional()
    })
    .strict();

export default TrainingLogOrderByWithAggregationInputSchema;
