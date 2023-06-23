import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const TrainingLogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TrainingLogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TrainingLogScalarWhereWithAggregatesInputSchema),z.lazy(() => TrainingLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrainingLogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrainingLogScalarWhereWithAggregatesInputSchema),z.lazy(() => TrainingLogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dog_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default TrainingLogScalarWhereWithAggregatesInputSchema;
