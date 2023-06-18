import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';

export const AuthUserRelationFilterSchema: z.ZodType<Prisma.AuthUserRelationFilter> = z.object({
  is: z.lazy(() => AuthUserWhereInputSchema).optional(),
  isNot: z.lazy(() => AuthUserWhereInputSchema).optional()
}).strict();

export default AuthUserRelationFilterSchema;
