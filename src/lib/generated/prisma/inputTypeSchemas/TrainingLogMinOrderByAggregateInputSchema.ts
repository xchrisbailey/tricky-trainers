import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrainingLogMinOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingLogMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      dog_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default TrainingLogMinOrderByAggregateInputSchema;
