import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateManyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string()
  })
  .strict();

export const AuthUserCreateManyInputObjectSchema = Schema;
