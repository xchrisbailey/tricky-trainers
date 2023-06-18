import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserCreateWithoutAuth_sessionInputSchema } from './AuthUserCreateWithoutAuth_sessionInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_sessionInputSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInputSchema';

export const AuthUserCreateOrConnectWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutAuth_sessionInput> = z.object({
  where: z.lazy(() => AuthUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema) ]),
}).strict();

export default AuthUserCreateOrConnectWithoutAuth_sessionInputSchema;
