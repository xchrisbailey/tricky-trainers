import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserCountOutputTypeSelectSchema } from './AuthUserCountOutputTypeSelectSchema';

export const AuthUserCountOutputTypeArgsSchema: z.ZodType<Prisma.AuthUserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => AuthUserCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AuthUserCountOutputTypeSelectSchema;
