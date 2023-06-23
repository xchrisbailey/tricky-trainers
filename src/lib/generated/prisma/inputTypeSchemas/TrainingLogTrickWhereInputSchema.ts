import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TrickRelationFilterSchema } from './TrickRelationFilterSchema';
import { TrickWhereInputSchema } from './TrickWhereInputSchema';
import { TrainingLogRelationFilterSchema } from './TrainingLogRelationFilterSchema';
import { TrainingLogWhereInputSchema } from './TrainingLogWhereInputSchema';

export const TrainingLogTrickWhereInputSchema: z.ZodType<Prisma.TrainingLogTrickWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TrainingLogTrickWhereInputSchema),z.lazy(() => TrainingLogTrickWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrainingLogTrickWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrainingLogTrickWhereInputSchema),z.lazy(() => TrainingLogTrickWhereInputSchema).array() ]).optional(),
  trick_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  log_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  understanding: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  train_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  trick: z.union([ z.lazy(() => TrickRelationFilterSchema),z.lazy(() => TrickWhereInputSchema) ]).optional(),
  training_log: z.union([ z.lazy(() => TrainingLogRelationFilterSchema),z.lazy(() => TrainingLogWhereInputSchema) ]).optional(),
}).strict();

export default TrainingLogTrickWhereInputSchema;
