import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthKeyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeyAvgOrderByAggregateInput> =
  z
    .object({
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default AuthKeyAvgOrderByAggregateInputSchema;
