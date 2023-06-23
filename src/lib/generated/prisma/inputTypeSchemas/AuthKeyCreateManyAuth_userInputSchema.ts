import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AuthKeyCreateManyAuth_userInputSchema: z.ZodType<Prisma.AuthKeyCreateManyAuth_userInput> = z.object({
  id: z.string(),
  hashed_password: z.string().optional().nullable(),
  primary_key: z.boolean(),
  expires: z.bigint().optional().nullable()
}).strict();

export default AuthKeyCreateManyAuth_userInputSchema;
