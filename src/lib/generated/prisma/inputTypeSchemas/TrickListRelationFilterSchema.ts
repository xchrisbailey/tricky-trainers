import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickWhereInputSchema } from './TrickWhereInputSchema';

export const TrickListRelationFilterSchema: z.ZodType<Prisma.TrickListRelationFilter> = z.object({
  every: z.lazy(() => TrickWhereInputSchema).optional(),
  some: z.lazy(() => TrickWhereInputSchema).optional(),
  none: z.lazy(() => TrickWhereInputSchema).optional()
}).strict();

export default TrickListRelationFilterSchema;
