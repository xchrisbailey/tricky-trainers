import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionWhereInputSchema } from '../inputTypeSchemas/AuthSessionWhereInputSchema';

export const AuthSessionDeleteManyArgsSchema: z.ZodType<Prisma.AuthSessionDeleteManyArgs> = z
  .object({
    where: AuthSessionWhereInputSchema.optional()
  })
  .strict();

export default AuthSessionDeleteManyArgsSchema;
