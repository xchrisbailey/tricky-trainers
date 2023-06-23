import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthSessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthSessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  active_expires: z.lazy(() => SortOrderSchema).optional(),
  idle_expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AuthSessionMinOrderByAggregateInputSchema;
