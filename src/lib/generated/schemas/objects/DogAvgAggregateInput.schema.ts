import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogAvgAggregateInputType> = z
  .object({
    age_years: z.literal(true).optional(),
    age_months: z.literal(true).optional()
  })
  .strict();

export const DogAvgAggregateInputObjectSchema = Schema;
