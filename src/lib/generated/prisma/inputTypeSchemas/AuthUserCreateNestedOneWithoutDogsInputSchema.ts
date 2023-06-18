import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutDogsInputSchema } from './AuthUserCreateWithoutDogsInputSchema';
import { AuthUserUncheckedCreateWithoutDogsInputSchema } from './AuthUserUncheckedCreateWithoutDogsInputSchema';
import { AuthUserCreateOrConnectWithoutDogsInputSchema } from './AuthUserCreateOrConnectWithoutDogsInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';

export const AuthUserCreateNestedOneWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutDogsInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutDogsInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutDogsInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
}).strict();

export default AuthUserCreateNestedOneWithoutDogsInputSchema;
