import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutAuth_keyInputSchema } from './AuthUserCreateNestedOneWithoutAuth_keyInputSchema';

export const AuthKeyCreateInputSchema: z.ZodType<Prisma.AuthKeyCreateInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable(),
    primary_key: z.boolean(),
    expires: z.bigint().optional().nullable(),
    auth_user: z.lazy(() => AuthUserCreateNestedOneWithoutAuth_keyInputSchema)
  })
  .strict();

export default AuthKeyCreateInputSchema;
