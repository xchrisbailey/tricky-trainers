import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TrainingLogTrickCountOrderByAggregateInputSchema } from './TrainingLogTrickCountOrderByAggregateInputSchema';
import { TrainingLogTrickAvgOrderByAggregateInputSchema } from './TrainingLogTrickAvgOrderByAggregateInputSchema';
import { TrainingLogTrickMaxOrderByAggregateInputSchema } from './TrainingLogTrickMaxOrderByAggregateInputSchema';
import { TrainingLogTrickMinOrderByAggregateInputSchema } from './TrainingLogTrickMinOrderByAggregateInputSchema';
import { TrainingLogTrickSumOrderByAggregateInputSchema } from './TrainingLogTrickSumOrderByAggregateInputSchema';

export const TrainingLogTrickOrderByWithAggregationInputSchema: z.ZodType<Prisma.TrainingLogTrickOrderByWithAggregationInput> = z.object({
  trick_id: z.lazy(() => SortOrderSchema).optional(),
  log_id: z.lazy(() => SortOrderSchema).optional(),
  understanding: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TrainingLogTrickCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TrainingLogTrickAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TrainingLogTrickMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TrainingLogTrickMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TrainingLogTrickSumOrderByAggregateInputSchema).optional()
}).strict();

export default TrainingLogTrickOrderByWithAggregationInputSchema;
