import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthUserCountOrderByAggregateInputSchema } from './AuthUserCountOrderByAggregateInputSchema';
import { AuthUserMaxOrderByAggregateInputSchema } from './AuthUserMaxOrderByAggregateInputSchema';
import { AuthUserMinOrderByAggregateInputSchema } from './AuthUserMinOrderByAggregateInputSchema';

export const AuthUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthUserOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      first_name: z.lazy(() => SortOrderSchema).optional(),
      last_name: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AuthUserCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AuthUserMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AuthUserMinOrderByAggregateInputSchema).optional()
    })
    .strict();

export default AuthUserOrderByWithAggregationInputSchema;
