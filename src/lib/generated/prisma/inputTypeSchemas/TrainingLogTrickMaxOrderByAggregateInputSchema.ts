import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrainingLogTrickMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingLogTrickMaxOrderByAggregateInput> =
  z
    .object({
      trick_id: z.lazy(() => SortOrderSchema).optional(),
      log_id: z.lazy(() => SortOrderSchema).optional(),
      understanding: z.lazy(() => SortOrderSchema).optional(),
      notes: z.lazy(() => SortOrderSchema).optional(),
      train_date: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default TrainingLogTrickMaxOrderByAggregateInputSchema;
