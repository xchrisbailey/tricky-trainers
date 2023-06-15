import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickSumOrderByAggregateInput> = z
  .object({
    difficulty: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const TrickSumOrderByAggregateInputObjectSchema = Schema;
