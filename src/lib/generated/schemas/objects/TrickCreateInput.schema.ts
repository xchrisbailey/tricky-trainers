import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutTricksInputObjectSchema } from './AuthUserCreateNestedOneWithoutTricksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    example: z.string(),
    difficulty: z.number(),
    created_on: z.coerce.date().optional(),
    User: z.lazy(() => AuthUserCreateNestedOneWithoutTricksInputObjectSchema).optional()
  })
  .strict();

export const TrickCreateInputObjectSchema = Schema;
