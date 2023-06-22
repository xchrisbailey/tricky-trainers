import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AuthKeyCountOrderByAggregateInputSchema } from './AuthKeyCountOrderByAggregateInputSchema';
import { AuthKeyAvgOrderByAggregateInputSchema } from './AuthKeyAvgOrderByAggregateInputSchema';
import { AuthKeyMaxOrderByAggregateInputSchema } from './AuthKeyMaxOrderByAggregateInputSchema';
import { AuthKeyMinOrderByAggregateInputSchema } from './AuthKeyMinOrderByAggregateInputSchema';
import { AuthKeySumOrderByAggregateInputSchema } from './AuthKeySumOrderByAggregateInputSchema';

export const AuthKeyOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthKeyOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      hashed_password: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      primary_key: z.lazy(() => SortOrderSchema).optional(),
      expires: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      _count: z.lazy(() => AuthKeyCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AuthKeyAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AuthKeyMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AuthKeyMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AuthKeySumOrderByAggregateInputSchema).optional()
    })
    .strict();

export default AuthKeyOrderByWithAggregationInputSchema;
