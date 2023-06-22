import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserCreateWithoutDogsInputSchema } from './AuthUserCreateWithoutDogsInputSchema';
import { AuthUserUncheckedCreateWithoutDogsInputSchema } from './AuthUserUncheckedCreateWithoutDogsInputSchema';

export const AuthUserCreateOrConnectWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutDogsInput> =
  z
    .object({
      where: z.lazy(() => AuthUserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AuthUserCreateWithoutDogsInputSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputSchema)
      ])
    })
    .strict();

export default AuthUserCreateOrConnectWithoutDogsInputSchema;
