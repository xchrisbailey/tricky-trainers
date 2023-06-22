import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthKeyWhereUniqueInputSchema: z.ZodType<Prisma.AuthKeyWhereUniqueInput> = z
  .object({
    id: z.string().optional()
  })
  .strict();

export default AuthKeyWhereUniqueInputSchema;
