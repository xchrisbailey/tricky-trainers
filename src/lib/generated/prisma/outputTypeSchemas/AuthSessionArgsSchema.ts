import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionSelectSchema } from '../inputTypeSchemas/AuthSessionSelectSchema';
import { AuthSessionIncludeSchema } from '../inputTypeSchemas/AuthSessionIncludeSchema';

export const AuthSessionArgsSchema: z.ZodType<Prisma.AuthSessionArgs> = z.object({
  select: z.lazy(() => AuthSessionSelectSchema).optional(),
  include: z.lazy(() => AuthSessionIncludeSchema).optional(),
}).strict();

export default AuthSessionArgsSchema;
