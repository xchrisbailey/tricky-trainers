import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthSessionCreateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateWithoutAuth_userInput> = z.object({
  id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export default AuthSessionCreateWithoutAuth_userInputSchema;
