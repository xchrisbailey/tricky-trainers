import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionScalarWhereInputSchema } from './AuthSessionScalarWhereInputSchema';
import { AuthSessionUpdateManyMutationInputSchema } from './AuthSessionUpdateManyMutationInputSchema';
import { AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputSchema';

export const AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUpdateManyWithWhereWithoutAuth_userInput> =
  z
    .object({
      where: z.lazy(() => AuthSessionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => AuthSessionUpdateManyMutationInputSchema),
        z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_sessionInputSchema)
      ])
    })
    .strict();

export default AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema;
