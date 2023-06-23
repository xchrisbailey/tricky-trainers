import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionCreateManyAuth_userInputSchema } from './AuthSessionCreateManyAuth_userInputSchema';

export const AuthSessionCreateManyAuth_userInputEnvelopeSchema: z.ZodType<Prisma.AuthSessionCreateManyAuth_userInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthSessionCreateManyAuth_userInputSchema),z.lazy(() => AuthSessionCreateManyAuth_userInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AuthSessionCreateManyAuth_userInputEnvelopeSchema;
