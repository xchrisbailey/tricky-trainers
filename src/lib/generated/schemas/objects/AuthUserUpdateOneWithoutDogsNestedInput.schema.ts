import { z } from 'zod';
import { AuthUserCreateWithoutDogsInputObjectSchema } from './AuthUserCreateWithoutDogsInput.schema';
import { AuthUserUncheckedCreateWithoutDogsInputObjectSchema } from './AuthUserUncheckedCreateWithoutDogsInput.schema';
import { AuthUserCreateOrConnectWithoutDogsInputObjectSchema } from './AuthUserCreateOrConnectWithoutDogsInput.schema';
import { AuthUserUpsertWithoutDogsInputObjectSchema } from './AuthUserUpsertWithoutDogsInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema';
import { AuthUserUpdateWithoutDogsInputObjectSchema } from './AuthUserUpdateWithoutDogsInput.schema';
import { AuthUserUncheckedUpdateWithoutDogsInputObjectSchema } from './AuthUserUncheckedUpdateWithoutDogsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpdateOneWithoutDogsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthUserCreateWithoutDogsInputObjectSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutDogsInputObjectSchema).optional(),
    upsert: z.lazy(() => AuthUserUpsertWithoutDogsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AuthUserUpdateWithoutDogsInputObjectSchema),
        z.lazy(() => AuthUserUncheckedUpdateWithoutDogsInputObjectSchema)
      ])
      .optional()
  })
  .strict();

export const AuthUserUpdateOneWithoutDogsNestedInputObjectSchema = Schema;
