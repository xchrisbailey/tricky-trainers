import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthSessionCountOrderByAggregateInputSchema } from './AuthSessionCountOrderByAggregateInputSchema';
import { AuthSessionAvgOrderByAggregateInputSchema } from './AuthSessionAvgOrderByAggregateInputSchema';
import { AuthSessionMaxOrderByAggregateInputSchema } from './AuthSessionMaxOrderByAggregateInputSchema';
import { AuthSessionMinOrderByAggregateInputSchema } from './AuthSessionMinOrderByAggregateInputSchema';
import { AuthSessionSumOrderByAggregateInputSchema } from './AuthSessionSumOrderByAggregateInputSchema';

export const AuthSessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthSessionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      active_expires: z.lazy(() => SortOrderSchema).optional(),
      idle_expires: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AuthSessionCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AuthSessionAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AuthSessionMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AuthSessionMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AuthSessionSumOrderByAggregateInputSchema).optional()
    })
    .strict();

export default AuthSessionOrderByWithAggregationInputSchema;
