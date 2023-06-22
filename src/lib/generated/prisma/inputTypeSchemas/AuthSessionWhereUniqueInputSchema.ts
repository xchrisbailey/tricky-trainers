import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthSessionWhereUniqueInputSchema: z.ZodType<Prisma.AuthSessionWhereUniqueInput> = z
  .object({
    id: z.string().optional()
  })
  .strict();

export default AuthSessionWhereUniqueInputSchema;
