import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyWhereUniqueInputSchema } from './AuthKeyWhereUniqueInputSchema';
import { AuthKeyCreateWithoutAuth_userInputSchema } from './AuthKeyCreateWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInputSchema';

export const AuthKeyCreateOrConnectWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyCreateOrConnectWithoutAuth_userInput> =
  z
    .object({
      where: z.lazy(() => AuthKeyWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),
        z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema)
      ])
    })
    .strict();

export default AuthKeyCreateOrConnectWithoutAuth_userInputSchema;
