import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutAuth_keyInputSchema } from './AuthUserCreateWithoutAuth_keyInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_keyInputSchema } from './AuthUserUncheckedCreateWithoutAuth_keyInputSchema';
import { AuthUserCreateOrConnectWithoutAuth_keyInputSchema } from './AuthUserCreateOrConnectWithoutAuth_keyInputSchema';
import { AuthUserUpsertWithoutAuth_keyInputSchema } from './AuthUserUpsertWithoutAuth_keyInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserUpdateWithoutAuth_keyInputSchema } from './AuthUserUpdateWithoutAuth_keyInputSchema';
import { AuthUserUncheckedUpdateWithoutAuth_keyInputSchema } from './AuthUserUncheckedUpdateWithoutAuth_keyInputSchema';

export const AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutAuth_keyNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutAuth_keyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutAuth_keyInputSchema).optional(),
  upsert: z.lazy(() => AuthUserUpsertWithoutAuth_keyInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutAuth_keyInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_keyInputSchema) ]).optional(),
}).strict();

export default AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema;
