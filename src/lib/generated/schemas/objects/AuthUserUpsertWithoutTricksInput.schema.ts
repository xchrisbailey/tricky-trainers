import { z } from 'zod';
import { AuthUserUpdateWithoutTricksInputObjectSchema } from './AuthUserUpdateWithoutTricksInput.schema';
import { AuthUserUncheckedUpdateWithoutTricksInputObjectSchema } from './AuthUserUncheckedUpdateWithoutTricksInput.schema';
import { AuthUserCreateWithoutTricksInputObjectSchema } from './AuthUserCreateWithoutTricksInput.schema';
import { AuthUserUncheckedCreateWithoutTricksInputObjectSchema } from './AuthUserUncheckedCreateWithoutTricksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpsertWithoutTricksInput> = z
  .object({
    update: z.union([
      z.lazy(() => AuthUserUpdateWithoutTricksInputObjectSchema),
      z.lazy(() => AuthUserUncheckedUpdateWithoutTricksInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => AuthUserCreateWithoutTricksInputObjectSchema),
      z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputObjectSchema)
    ])
  })
  .strict();

export const AuthUserUpsertWithoutTricksInputObjectSchema = Schema;
