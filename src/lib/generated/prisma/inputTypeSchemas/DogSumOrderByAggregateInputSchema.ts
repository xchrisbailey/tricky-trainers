import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DogSumOrderByAggregateInputSchema: z.ZodType<Prisma.DogSumOrderByAggregateInput> = z
  .object({
    age_years: z.lazy(() => SortOrderSchema).optional(),
    age_months: z.lazy(() => SortOrderSchema).optional()
  })
  .strict();

export default DogSumOrderByAggregateInputSchema;
