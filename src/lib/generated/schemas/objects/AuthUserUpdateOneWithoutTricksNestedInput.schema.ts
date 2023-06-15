import { z } from 'zod';
import { AuthUserCreateWithoutTricksInputObjectSchema } from './AuthUserCreateWithoutTricksInput.schema';
import { AuthUserUncheckedCreateWithoutTricksInputObjectSchema } from './AuthUserUncheckedCreateWithoutTricksInput.schema';
import { AuthUserCreateOrConnectWithoutTricksInputObjectSchema } from './AuthUserCreateOrConnectWithoutTricksInput.schema';
import { AuthUserUpsertWithoutTricksInputObjectSchema } from './AuthUserUpsertWithoutTricksInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema';
import { AuthUserUpdateWithoutTricksInputObjectSchema } from './AuthUserUpdateWithoutTricksInput.schema';
import { AuthUserUncheckedUpdateWithoutTricksInputObjectSchema } from './AuthUserUncheckedUpdateWithoutTricksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpdateOneWithoutTricksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthUserCreateWithoutTricksInputObjectSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutTricksInputObjectSchema).optional(),
    upsert: z.lazy(() => AuthUserUpsertWithoutTricksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthUserUpdateWithoutTricksInputObjectSchema),
        z.lazy(() => AuthUserUncheckedUpdateWithoutTricksInputObjectSchema)
      ])
      .optional()
  })
  .strict();

export const AuthUserUpdateOneWithoutTricksNestedInputObjectSchema = Schema;
