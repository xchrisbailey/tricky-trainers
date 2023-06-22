import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthUserWhereUniqueInputSchema: z.ZodType<Prisma.AuthUserWhereUniqueInput> = z
  .object({
    id: z.string().optional()
  })
  .strict();

export default AuthUserWhereUniqueInputSchema;
