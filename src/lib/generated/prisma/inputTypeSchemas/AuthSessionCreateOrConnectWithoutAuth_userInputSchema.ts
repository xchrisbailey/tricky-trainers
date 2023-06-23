import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionWhereUniqueInputSchema } from './AuthSessionWhereUniqueInputSchema';
import { AuthSessionCreateWithoutAuth_userInputSchema } from './AuthSessionCreateWithoutAuth_userInputSchema';
import { AuthSessionUncheckedCreateWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInputSchema';

export const AuthSessionCreateOrConnectWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionCreateOrConnectWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthSessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema) ]),
}).strict();

export default AuthSessionCreateOrConnectWithoutAuth_userInputSchema;
