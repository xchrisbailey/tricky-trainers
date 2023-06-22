import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserCreateWithoutAuth_keyInputSchema } from './AuthUserCreateWithoutAuth_keyInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_keyInputSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInputSchema';

export const AuthUserCreateOrConnectWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutAuth_keyInput> =
  z
    .object({
      where: z.lazy(() => AuthUserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema)
      ])
    })
    .strict();

export default AuthUserCreateOrConnectWithoutAuth_keyInputSchema;
