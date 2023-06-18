import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserUpdateWithoutDogsInputSchema } from './AuthUserUpdateWithoutDogsInputSchema';
import { AuthUserUncheckedUpdateWithoutDogsInputSchema } from './AuthUserUncheckedUpdateWithoutDogsInputSchema';
import { AuthUserCreateWithoutDogsInputSchema } from './AuthUserCreateWithoutDogsInputSchema';
import { AuthUserUncheckedCreateWithoutDogsInputSchema } from './AuthUserUncheckedCreateWithoutDogsInputSchema';

export const AuthUserUpsertWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutDogsInput> = z.object({
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutDogsInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutDogsInputSchema) ]),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutDogsInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputSchema) ]),
}).strict();

export default AuthUserUpsertWithoutDogsInputSchema;
