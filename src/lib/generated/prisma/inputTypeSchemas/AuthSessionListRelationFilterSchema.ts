import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionWhereInputSchema } from './AuthSessionWhereInputSchema';

export const AuthSessionListRelationFilterSchema: z.ZodType<Prisma.AuthSessionListRelationFilter> =
  z
    .object({
      every: z.lazy(() => AuthSessionWhereInputSchema).optional(),
      some: z.lazy(() => AuthSessionWhereInputSchema).optional(),
      none: z.lazy(() => AuthSessionWhereInputSchema).optional()
    })
    .strict();

export default AuthSessionListRelationFilterSchema;
