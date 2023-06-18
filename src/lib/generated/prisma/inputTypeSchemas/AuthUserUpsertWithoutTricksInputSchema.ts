import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserUpdateWithoutTricksInputSchema } from './AuthUserUpdateWithoutTricksInputSchema';
import { AuthUserUncheckedUpdateWithoutTricksInputSchema } from './AuthUserUncheckedUpdateWithoutTricksInputSchema';
import { AuthUserCreateWithoutTricksInputSchema } from './AuthUserCreateWithoutTricksInputSchema';
import { AuthUserUncheckedCreateWithoutTricksInputSchema } from './AuthUserUncheckedCreateWithoutTricksInputSchema';

export const AuthUserUpsertWithoutTricksInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutTricksInput> = z.object({
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutTricksInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutTricksInputSchema) ]),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutTricksInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputSchema) ]),
}).strict();

export default AuthUserUpsertWithoutTricksInputSchema;
