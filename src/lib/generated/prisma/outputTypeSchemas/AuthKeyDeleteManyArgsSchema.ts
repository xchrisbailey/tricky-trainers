import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyWhereInputSchema } from '../inputTypeSchemas/AuthKeyWhereInputSchema';

export const AuthKeyDeleteManyArgsSchema: z.ZodType<Prisma.AuthKeyDeleteManyArgs> = z
  .object({
    where: AuthKeyWhereInputSchema.optional()
  })
  .strict();

export default AuthKeyDeleteManyArgsSchema;
