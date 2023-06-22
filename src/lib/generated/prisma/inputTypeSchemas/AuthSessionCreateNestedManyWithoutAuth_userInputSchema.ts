import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionCreateWithoutAuth_userInputSchema } from './AuthSessionCreateWithoutAuth_userInputSchema';
import { AuthSessionUncheckedCreateWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInputSchema';
import { AuthSessionCreateOrConnectWithoutAuth_userInputSchema } from './AuthSessionCreateOrConnectWithoutAuth_userInputSchema';
import { AuthSessionCreateManyAuth_userInputEnvelopeSchema } from './AuthSessionCreateManyAuth_userInputEnvelopeSchema';
import { AuthSessionWhereUniqueInputSchema } from './AuthSessionWhereUniqueInputSchema';

export const AuthSessionCreateNestedManyWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateNestedManyWithoutAuth_userInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),
          z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema).array(),
          z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema),
          z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema),
          z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => AuthSessionWhereUniqueInputSchema),
          z.lazy(() => AuthSessionWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default AuthSessionCreateNestedManyWithoutAuth_userInputSchema;
