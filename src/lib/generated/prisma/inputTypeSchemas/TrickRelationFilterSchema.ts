import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickWhereInputSchema } from './TrickWhereInputSchema';

export const TrickRelationFilterSchema: z.ZodType<Prisma.TrickRelationFilter> = z
  .object({
    is: z
      .lazy(() => TrickWhereInputSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TrickWhereInputSchema)
      .optional()
      .nullable()
  })
  .strict();

export default TrickRelationFilterSchema;
