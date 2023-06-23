import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutDogsInputSchema } from './AuthUserCreateWithoutDogsInputSchema';
import { AuthUserUncheckedCreateWithoutDogsInputSchema } from './AuthUserUncheckedCreateWithoutDogsInputSchema';
import { AuthUserCreateOrConnectWithoutDogsInputSchema } from './AuthUserCreateOrConnectWithoutDogsInputSchema';
import { AuthUserUpsertWithoutDogsInputSchema } from './AuthUserUpsertWithoutDogsInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserUpdateWithoutDogsInputSchema } from './AuthUserUpdateWithoutDogsInputSchema';
import { AuthUserUncheckedUpdateWithoutDogsInputSchema } from './AuthUserUncheckedUpdateWithoutDogsInputSchema';

export const AuthUserUpdateOneWithoutDogsNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneWithoutDogsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutDogsInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutDogsInputSchema).optional(),
  upsert: z.lazy(() => AuthUserUpsertWithoutDogsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutDogsInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutDogsInputSchema) ]).optional(),
}).strict();

export default AuthUserUpdateOneWithoutDogsNestedInputSchema;
