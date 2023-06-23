import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutTricksInputSchema } from './AuthUserCreateWithoutTricksInputSchema';
import { AuthUserUncheckedCreateWithoutTricksInputSchema } from './AuthUserUncheckedCreateWithoutTricksInputSchema';
import { AuthUserCreateOrConnectWithoutTricksInputSchema } from './AuthUserCreateOrConnectWithoutTricksInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';

export const AuthUserCreateNestedOneWithoutTricksInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutTricksInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutTricksInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutTricksInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
}).strict();

export default AuthUserCreateNestedOneWithoutTricksInputSchema;
