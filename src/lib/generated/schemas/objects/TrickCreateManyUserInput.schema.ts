import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    example: z.string(),
    difficulty: z.number(),
    created_on: z.coerce.date().optional()
  })
  .strict();

export const TrickCreateManyUserInputObjectSchema = Schema;
