import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionWhereUniqueInputSchema } from './AuthSessionWhereUniqueInputSchema';
import { AuthSessionUpdateWithoutAuth_userInputSchema } from './AuthSessionUpdateWithoutAuth_userInputSchema';
import { AuthSessionUncheckedUpdateWithoutAuth_userInputSchema } from './AuthSessionUncheckedUpdateWithoutAuth_userInputSchema';
import { AuthSessionCreateWithoutAuth_userInputSchema } from './AuthSessionCreateWithoutAuth_userInputSchema';
import { AuthSessionUncheckedCreateWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInputSchema';

export const AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpsertWithWhereUniqueWithoutAuth_userInput> =
  z
    .object({
      where: z.lazy(() => AuthSessionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => AuthSessionUpdateWithoutAuth_userInputSchema),
        z.lazy(() => AuthSessionUncheckedUpdateWithoutAuth_userInputSchema)
      ]),
      create: z.union([
        z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),
        z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema)
      ])
    })
    .strict();

export default AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema;
