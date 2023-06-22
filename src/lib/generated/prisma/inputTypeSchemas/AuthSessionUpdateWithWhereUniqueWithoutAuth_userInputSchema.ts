import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionWhereUniqueInputSchema } from './AuthSessionWhereUniqueInputSchema';
import { AuthSessionUpdateWithoutAuth_userInputSchema } from './AuthSessionUpdateWithoutAuth_userInputSchema';
import { AuthSessionUncheckedUpdateWithoutAuth_userInputSchema } from './AuthSessionUncheckedUpdateWithoutAuth_userInputSchema';

export const AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpdateWithWhereUniqueWithoutAuth_userInput> =
  z
    .object({
      where: z.lazy(() => AuthSessionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AuthSessionUpdateWithoutAuth_userInputSchema),
        z.lazy(() => AuthSessionUncheckedUpdateWithoutAuth_userInputSchema)
      ])
    })
    .strict();

export default AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema;
