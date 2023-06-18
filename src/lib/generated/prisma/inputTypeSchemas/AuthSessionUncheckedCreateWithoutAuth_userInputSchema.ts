import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthSessionUncheckedCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUncheckedCreateWithoutAuth_userInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export default AuthSessionUncheckedCreateWithoutAuth_userInputSchema;
