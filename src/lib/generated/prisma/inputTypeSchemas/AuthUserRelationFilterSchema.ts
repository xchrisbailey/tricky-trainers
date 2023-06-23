import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';

export const AuthUserRelationFilterSchema: z.ZodType<Prisma.AuthUserRelationFilter> = z.object({
  is: z.lazy(() => AuthUserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AuthUserWhereInputSchema).optional().nullable()
}).strict();

export default AuthUserRelationFilterSchema;
