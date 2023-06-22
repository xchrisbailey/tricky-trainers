import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuthKeyUpdateManyMutationInputSchema';
import { AuthKeyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuthKeyUncheckedUpdateManyInputSchema';
import { AuthKeyWhereInputSchema } from '../inputTypeSchemas/AuthKeyWhereInputSchema';

export const AuthKeyUpdateManyArgsSchema: z.ZodType<Prisma.AuthKeyUpdateManyArgs> = z
  .object({
    data: z.union([AuthKeyUpdateManyMutationInputSchema, AuthKeyUncheckedUpdateManyInputSchema]),
    where: AuthKeyWhereInputSchema.optional()
  })
  .strict();

export default AuthKeyUpdateManyArgsSchema;
