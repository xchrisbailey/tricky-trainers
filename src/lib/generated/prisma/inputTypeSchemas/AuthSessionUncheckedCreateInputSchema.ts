import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthSessionUncheckedCreateInputSchema: z.ZodType<Prisma.AuthSessionUncheckedCreateInput> =
  z
    .object({
      id: z.string(),
      user_id: z.string(),
      active_expires: z.bigint(),
      idle_expires: z.bigint()
    })
    .strict();

export default AuthSessionUncheckedCreateInputSchema;
