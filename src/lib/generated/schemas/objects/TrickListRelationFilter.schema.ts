import { z } from 'zod';
import { TrickWhereInputObjectSchema } from './TrickWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickListRelationFilter> = z
  .object({
    every: z.lazy(() => TrickWhereInputObjectSchema).optional(),
    some: z.lazy(() => TrickWhereInputObjectSchema).optional(),
    none: z.lazy(() => TrickWhereInputObjectSchema).optional()
  })
  .strict();

export const TrickListRelationFilterObjectSchema = Schema;
