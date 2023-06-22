import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthSessionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionAvgOrderByAggregateInput> =
  z
    .object({
      active_expires: z.lazy(() => SortOrderSchema).optional(),
      idle_expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default AuthSessionAvgOrderByAggregateInputSchema;
