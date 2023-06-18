import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserCreateManyInputSchema } from '../inputTypeSchemas/AuthUserCreateManyInputSchema'

export const AuthUserCreateManyArgsSchema: z.ZodType<Prisma.AuthUserCreateManyArgs> = z.object({
  data: z.union([ AuthUserCreateManyInputSchema,AuthUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default AuthUserCreateManyArgsSchema;
