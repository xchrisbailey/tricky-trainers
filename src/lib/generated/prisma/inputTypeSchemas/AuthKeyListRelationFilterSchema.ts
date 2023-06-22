import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyWhereInputSchema } from './AuthKeyWhereInputSchema';

export const AuthKeyListRelationFilterSchema: z.ZodType<Prisma.AuthKeyListRelationFilter> = z
  .object({
    every: z.lazy(() => AuthKeyWhereInputSchema).optional(),
    some: z.lazy(() => AuthKeyWhereInputSchema).optional(),
    none: z.lazy(() => AuthKeyWhereInputSchema).optional()
  })
  .strict();

export default AuthKeyListRelationFilterSchema;
