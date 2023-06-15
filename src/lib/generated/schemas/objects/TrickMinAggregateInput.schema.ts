import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    example: z.literal(true).optional(),
    difficulty: z.literal(true).optional(),
    added_by: z.literal(true).optional(),
    created_on: z.literal(true).optional()
  })
  .strict();

export const TrickMinAggregateInputObjectSchema = Schema;
