import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserSelectSchema } from '../inputTypeSchemas/AuthUserSelectSchema';
import { AuthUserIncludeSchema } from '../inputTypeSchemas/AuthUserIncludeSchema';

export const AuthUserArgsSchema: z.ZodType<Prisma.AuthUserArgs> = z.object({
  select: z.lazy(() => AuthUserSelectSchema).optional(),
  include: z.lazy(() => AuthUserIncludeSchema).optional(),
}).strict();

export default AuthUserArgsSchema;
