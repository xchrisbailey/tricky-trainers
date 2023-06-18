import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthSessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuthSessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AuthSessionOrderByRelationAggregateInputSchema;
