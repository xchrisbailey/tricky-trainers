import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickAvgAggregateInputType> = z
  .object({
    difficulty: z.literal(true).optional()
  })
  .strict();

export const TrickAvgAggregateInputObjectSchema = Schema;
