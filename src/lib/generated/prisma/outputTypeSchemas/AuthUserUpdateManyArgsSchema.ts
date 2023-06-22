import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuthUserUpdateManyMutationInputSchema';
import { AuthUserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuthUserUncheckedUpdateManyInputSchema';
import { AuthUserWhereInputSchema } from '../inputTypeSchemas/AuthUserWhereInputSchema';

export const AuthUserUpdateManyArgsSchema: z.ZodType<Prisma.AuthUserUpdateManyArgs> = z
  .object({
    data: z.union([AuthUserUpdateManyMutationInputSchema, AuthUserUncheckedUpdateManyInputSchema]),
    where: AuthUserWhereInputSchema.optional()
  })
  .strict();

export default AuthUserUpdateManyArgsSchema;
