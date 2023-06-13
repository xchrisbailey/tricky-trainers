import { z } from 'zod';
import { AuthUserUpdateWithoutDogsInputObjectSchema } from './AuthUserUpdateWithoutDogsInput.schema';
import { AuthUserUncheckedUpdateWithoutDogsInputObjectSchema } from './AuthUserUncheckedUpdateWithoutDogsInput.schema';
import { AuthUserCreateWithoutDogsInputObjectSchema } from './AuthUserCreateWithoutDogsInput.schema';
import { AuthUserUncheckedCreateWithoutDogsInputObjectSchema } from './AuthUserUncheckedCreateWithoutDogsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpsertWithoutDogsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AuthUserUpdateWithoutDogsInputObjectSchema),
      z.lazy(() => AuthUserUncheckedUpdateWithoutDogsInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => AuthUserCreateWithoutDogsInputObjectSchema),
      z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputObjectSchema)
    ])
  })
  .strict();

export const AuthUserUpsertWithoutDogsInputObjectSchema = Schema;
