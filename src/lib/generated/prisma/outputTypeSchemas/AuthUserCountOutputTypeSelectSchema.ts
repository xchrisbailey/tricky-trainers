import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AuthUserCountOutputTypeSelectSchema: z.ZodType<Prisma.AuthUserCountOutputTypeSelect> = z.object({
  auth_session: z.boolean().optional(),
  auth_key: z.boolean().optional(),
  dogs: z.boolean().optional(),
  tricks: z.boolean().optional(),
  TrainingLog: z.boolean().optional(),
}).strict();

export default AuthUserCountOutputTypeSelectSchema;
