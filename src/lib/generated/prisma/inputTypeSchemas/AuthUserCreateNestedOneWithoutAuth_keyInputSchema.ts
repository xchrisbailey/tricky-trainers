import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutAuth_keyInputSchema } from './AuthUserCreateWithoutAuth_keyInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_keyInputSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInputSchema';
import { AuthUserCreateOrConnectWithoutAuth_keyInputSchema } from './AuthUserCreateOrConnectWithoutAuth_keyInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';

export const AuthUserCreateNestedOneWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutAuth_keyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),
          z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutAuth_keyInputSchema).optional(),
      connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
    })
    .strict();

export default AuthUserCreateNestedOneWithoutAuth_keyInputSchema;
