import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutAuth_sessionInputSchema } from './AuthUserCreateNestedOneWithoutAuth_sessionInputSchema';

export const AuthSessionCreateInputSchema: z.ZodType<Prisma.AuthSessionCreateInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint(),
  auth_user: z.lazy(() => AuthUserCreateNestedOneWithoutAuth_sessionInputSchema)
}).strict();

export default AuthSessionCreateInputSchema;
