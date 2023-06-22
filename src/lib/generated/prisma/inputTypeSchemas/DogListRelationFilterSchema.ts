import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereInputSchema } from './DogWhereInputSchema';

export const DogListRelationFilterSchema: z.ZodType<Prisma.DogListRelationFilter> = z
  .object({
    every: z.lazy(() => DogWhereInputSchema).optional(),
    some: z.lazy(() => DogWhereInputSchema).optional(),
    none: z.lazy(() => DogWhereInputSchema).optional()
  })
  .strict();

export default DogListRelationFilterSchema;
