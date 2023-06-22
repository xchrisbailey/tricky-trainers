import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthSessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      active_expires: z.lazy(() => SortOrderSchema).optional(),
      idle_expires: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default AuthSessionCountOrderByAggregateInputSchema;
