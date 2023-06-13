import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogAvgOrderByAggregateInput> = z
  .object({
    age_years: z.lazy(() => SortOrderSchema).optional(),
    age_months: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const DogAvgOrderByAggregateInputObjectSchema = Schema;
