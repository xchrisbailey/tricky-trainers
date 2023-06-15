import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    example: z.string().optional()
  })
  .strict();

export const TrickWhereUniqueInputObjectSchema = Schema;