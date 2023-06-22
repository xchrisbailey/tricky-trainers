import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TrainingLogTrickSumOrderByAggregateInputSchema: z.ZodType<Prisma.TrainingLogTrickSumOrderByAggregateInput> =
  z
    .object({
      understanding: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default TrainingLogTrickSumOrderByAggregateInputSchema;
