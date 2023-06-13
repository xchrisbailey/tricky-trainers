import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutDogsInputObjectSchema } from './AuthUserCreateNestedOneWithoutDogsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    flare: z.string(),
    breed: z.string(),
    age_years: z.number(),
    age_months: z.number(),
    AuthUser: z.lazy(() => AuthUserCreateNestedOneWithoutDogsInputObjectSchema).optional()
  })
  .strict();

export const DogCreateInputObjectSchema = Schema;
