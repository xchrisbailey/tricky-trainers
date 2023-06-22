import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DogOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict();

export default DogOrderByRelationAggregateInputSchema;
