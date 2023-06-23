import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserUpdateWithoutAuth_sessionInputSchema } from './AuthUserUpdateWithoutAuth_sessionInputSchema';
import { AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema } from './AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema';
import { AuthUserCreateWithoutAuth_sessionInputSchema } from './AuthUserCreateWithoutAuth_sessionInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_sessionInputSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInputSchema';

export const AuthUserUpsertWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutAuth_sessionInput> = z.object({
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema) ]),
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema) ]),
}).strict();

export default AuthUserUpsertWithoutAuth_sessionInputSchema;
