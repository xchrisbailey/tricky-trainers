import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthKeySumOrderByAggregateInputSchema: z.ZodType<Prisma.AuthKeySumOrderByAggregateInput> =
  z
    .object({
      expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default AuthKeySumOrderByAggregateInputSchema;
