import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    first_name: z.literal(true).optional(),
    last_name: z.literal(true).optional(),
    role: z.literal(true).optional()
  })
  .strict();

export const AuthUserMinAggregateInputObjectSchema = Schema;
