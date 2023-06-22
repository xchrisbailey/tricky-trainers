import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserWhereInputSchema } from '../inputTypeSchemas/AuthUserWhereInputSchema';

export const AuthUserDeleteManyArgsSchema: z.ZodType<Prisma.AuthUserDeleteManyArgs> = z
  .object({
    where: AuthUserWhereInputSchema.optional()
  })
  .strict();

export default AuthUserDeleteManyArgsSchema;
