import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const AuthUserCreateManyInputSchema: z.ZodType<Prisma.AuthUserCreateManyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional()
  })
  .strict();

export default AuthUserCreateManyInputSchema;
