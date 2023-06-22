import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthKeyUncheckedCreateInputSchema: z.ZodType<Prisma.AuthKeyUncheckedCreateInput> = z
  .object({
    id: z.string(),
    hashed_password: z.string().optional().nullable(),
    user_id: z.string(),
    primary_key: z.boolean(),
    expires: z.bigint().optional().nullable()
  })
  .strict();

export default AuthKeyUncheckedCreateInputSchema;
