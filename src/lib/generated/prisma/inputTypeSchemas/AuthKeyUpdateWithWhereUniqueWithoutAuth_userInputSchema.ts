import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyWhereUniqueInputSchema } from './AuthKeyWhereUniqueInputSchema';
import { AuthKeyUpdateWithoutAuth_userInputSchema } from './AuthKeyUpdateWithoutAuth_userInputSchema';
import { AuthKeyUncheckedUpdateWithoutAuth_userInputSchema } from './AuthKeyUncheckedUpdateWithoutAuth_userInputSchema';

export const AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpdateWithWhereUniqueWithoutAuth_userInput> =
  z
    .object({
      where: z.lazy(() => AuthKeyWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AuthKeyUpdateWithoutAuth_userInputSchema),
        z.lazy(() => AuthKeyUncheckedUpdateWithoutAuth_userInputSchema)
      ])
    })
    .strict();

export default AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema;
