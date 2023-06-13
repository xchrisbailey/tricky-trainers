import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    flare: z.lazy(() => SortOrderSchema).optional(),
    breed: z.lazy(() => SortOrderSchema).optional(),
    age_years: z.lazy(() => SortOrderSchema).optional(),
    age_months: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export const DogCountOrderByAggregateInputObjectSchema = Schema;
