import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuthSessionUpdateManyMutationInputSchema'
import { AuthSessionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuthSessionUncheckedUpdateManyInputSchema'
import { AuthSessionWhereInputSchema } from '../inputTypeSchemas/AuthSessionWhereInputSchema'

export const AuthSessionUpdateManyArgsSchema: z.ZodType<Prisma.AuthSessionUpdateManyArgs> = z.object({
  data: z.union([ AuthSessionUpdateManyMutationInputSchema,AuthSessionUncheckedUpdateManyInputSchema ]),
  where: AuthSessionWhereInputSchema.optional(),
}).strict()

export default AuthSessionUpdateManyArgsSchema;
