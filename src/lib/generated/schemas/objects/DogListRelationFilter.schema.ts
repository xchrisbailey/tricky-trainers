import { z } from 'zod';
import { DogWhereInputObjectSchema } from './DogWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogListRelationFilter> = z
  .object({
    every: z.lazy(() => DogWhereInputObjectSchema).optional(),
    some: z.lazy(() => DogWhereInputObjectSchema).optional(),
    none: z.lazy(() => DogWhereInputObjectSchema).optional()
  })
  .strict();

export const DogListRelationFilterObjectSchema = Schema;
