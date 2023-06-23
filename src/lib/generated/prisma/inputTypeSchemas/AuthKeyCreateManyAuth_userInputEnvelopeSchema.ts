import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyCreateManyAuth_userInputSchema } from './AuthKeyCreateManyAuth_userInputSchema';

export const AuthKeyCreateManyAuth_userInputEnvelopeSchema: z.ZodType<Prisma.AuthKeyCreateManyAuth_userInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthKeyCreateManyAuth_userInputSchema),z.lazy(() => AuthKeyCreateManyAuth_userInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AuthKeyCreateManyAuth_userInputEnvelopeSchema;
