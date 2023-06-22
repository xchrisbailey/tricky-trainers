import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereInputSchema } from './DogWhereInputSchema';

export const DogRelationFilterSchema: z.ZodType<Prisma.DogRelationFilter> = z
  .object({
    is: z
      .lazy(() => DogWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DogWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export default DogRelationFilterSchema;
