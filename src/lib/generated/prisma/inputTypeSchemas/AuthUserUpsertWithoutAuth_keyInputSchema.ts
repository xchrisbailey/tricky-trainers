import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserUpdateWithoutAuth_keyInputSchema } from './AuthUserUpdateWithoutAuth_keyInputSchema';
import { AuthUserUncheckedUpdateWithoutAuth_keyInputSchema } from './AuthUserUncheckedUpdateWithoutAuth_keyInputSchema';
import { AuthUserCreateWithoutAuth_keyInputSchema } from './AuthUserCreateWithoutAuth_keyInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_keyInputSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInputSchema';

export const AuthUserUpsertWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutAuth_keyInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => AuthUserUpdateWithoutAuth_keyInputSchema),
        z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_keyInputSchema)
      ]),
      create: z.union([
        z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema)
      ])
    })
    .strict();

export default AuthUserUpsertWithoutAuth_keyInputSchema;
