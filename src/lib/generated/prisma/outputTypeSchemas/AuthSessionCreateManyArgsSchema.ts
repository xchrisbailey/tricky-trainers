import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionCreateManyInputSchema } from '../inputTypeSchemas/AuthSessionCreateManyInputSchema';

export const AuthSessionCreateManyArgsSchema: z.ZodType<Prisma.AuthSessionCreateManyArgs> = z
  .object({
    data: z.union([AuthSessionCreateManyInputSchema, AuthSessionCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export default AuthSessionCreateManyArgsSchema;
