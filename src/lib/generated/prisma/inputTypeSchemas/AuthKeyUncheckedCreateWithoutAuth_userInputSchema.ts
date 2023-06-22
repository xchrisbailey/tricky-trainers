import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthKeyUncheckedCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUncheckedCreateWithoutAuth_userInput> =
  z
    .object({
      id: z.string(),
      hashed_password: z.string().optional().nullable(),
      primary_key: z.boolean(),
      expires: z.bigint().optional().nullable()
    })
    .strict();

export default AuthKeyUncheckedCreateWithoutAuth_userInputSchema;
