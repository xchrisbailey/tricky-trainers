import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TrainingLogTrickScalarWhereInputSchema: z.ZodType<Prisma.TrainingLogTrickScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TrainingLogTrickScalarWhereInputSchema),z.lazy(() => TrainingLogTrickScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrainingLogTrickScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrainingLogTrickScalarWhereInputSchema),z.lazy(() => TrainingLogTrickScalarWhereInputSchema).array() ]).optional(),
  trick_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  log_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  understanding: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  train_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TrainingLogTrickScalarWhereInputSchema;
