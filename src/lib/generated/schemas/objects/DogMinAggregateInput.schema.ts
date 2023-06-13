import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    flare: z.literal(true).optional(),
    breed: z.literal(true).optional(),
    age_years: z.literal(true).optional(),
    age_months: z.literal(true).optional(),
    user_id: z.literal(true).optional()
  })
  .strict();

export const DogMinAggregateInputObjectSchema = Schema;
