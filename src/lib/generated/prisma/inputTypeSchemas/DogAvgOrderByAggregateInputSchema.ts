import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DogAvgOrderByAggregateInput> = z.object({
  age_years: z.lazy(() => SortOrderSchema).optional(),
  age_months: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DogAvgOrderByAggregateInputSchema;
