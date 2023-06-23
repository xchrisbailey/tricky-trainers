import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyCreateManyInputSchema } from '../inputTypeSchemas/AuthKeyCreateManyInputSchema'

export const AuthKeyCreateManyArgsSchema: z.ZodType<Prisma.AuthKeyCreateManyArgs> = z.object({
  data: z.union([ AuthKeyCreateManyInputSchema,AuthKeyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default AuthKeyCreateManyArgsSchema;
