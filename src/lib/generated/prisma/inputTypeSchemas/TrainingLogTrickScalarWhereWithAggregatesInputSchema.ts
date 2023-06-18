import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const TrainingLogTrickScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TrainingLogTrickScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TrainingLogTrickScalarWhereWithAggregatesInputSchema),z.lazy(() => TrainingLogTrickScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrainingLogTrickScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrainingLogTrickScalarWhereWithAggregatesInputSchema),z.lazy(() => TrainingLogTrickScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  trick_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  log_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  understanding: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default TrainingLogTrickScalarWhereWithAggregatesInputSchema;
