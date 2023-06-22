import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuthKeyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuthKeyOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default AuthKeyOrderByRelationAggregateInputSchema;
