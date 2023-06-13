import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogUncheckedCreateWithoutAuthUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    flare: z.string(),
    breed: z.string(),
    age_years: z.number(),
    age_months: z.number()
  })
  .strict();

export const DogUncheckedCreateWithoutAuthUserInputObjectSchema = Schema;
