import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserCreateWithoutTricksInputSchema } from './AuthUserCreateWithoutTricksInputSchema';
import { AuthUserUncheckedCreateWithoutTricksInputSchema } from './AuthUserUncheckedCreateWithoutTricksInputSchema';

export const AuthUserCreateOrConnectWithoutTricksInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutTricksInput> = z.object({
  where: z.lazy(() => AuthUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutTricksInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputSchema) ]),
}).strict();

export default AuthUserCreateOrConnectWithoutTricksInputSchema;
