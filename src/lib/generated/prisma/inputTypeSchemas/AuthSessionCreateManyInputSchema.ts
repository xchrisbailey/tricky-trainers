import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthSessionCreateManyInputSchema: z.ZodType<Prisma.AuthSessionCreateManyInput> = z.object({
  id: z.string(),
  user_id: z.string(),
  active_expires: z.bigint(),
  idle_expires: z.bigint()
}).strict();

export default AuthSessionCreateManyInputSchema;
