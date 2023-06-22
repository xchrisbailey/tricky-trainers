import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutTricksInputSchema } from './AuthUserCreateWithoutTricksInputSchema';
import { AuthUserUncheckedCreateWithoutTricksInputSchema } from './AuthUserUncheckedCreateWithoutTricksInputSchema';
import { AuthUserCreateOrConnectWithoutTricksInputSchema } from './AuthUserCreateOrConnectWithoutTricksInputSchema';
import { AuthUserUpsertWithoutTricksInputSchema } from './AuthUserUpsertWithoutTricksInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserUpdateWithoutTricksInputSchema } from './AuthUserUpdateWithoutTricksInputSchema';
import { AuthUserUncheckedUpdateWithoutTricksInputSchema } from './AuthUserUncheckedUpdateWithoutTricksInputSchema';

export const AuthUserUpdateOneWithoutTricksNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneWithoutTricksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AuthUserCreateWithoutTricksInputSchema),
          z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputSchema)
        ])
        .optional(),
      connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutTricksInputSchema).optional(),
      upsert: z.lazy(() => AuthUserUpsertWithoutTricksInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => AuthUserUpdateWithoutTricksInputSchema),
          z.lazy(() => AuthUserUncheckedUpdateWithoutTricksInputSchema)
        ])
        .optional()
    })
    .strict();

export default AuthUserUpdateOneWithoutTricksNestedInputSchema;
