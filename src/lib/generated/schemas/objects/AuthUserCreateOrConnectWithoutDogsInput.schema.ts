import { z } from 'zod';
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema';
import { AuthUserCreateWithoutDogsInputObjectSchema } from './AuthUserCreateWithoutDogsInput.schema';
import { AuthUserUncheckedCreateWithoutDogsInputObjectSchema } from './AuthUserUncheckedCreateWithoutDogsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutDogsInput> = z
  .object({
    where: z.lazy(() => AuthUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthUserCreateWithoutDogsInputObjectSchema),
      z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputObjectSchema)
    ])
  })
  .strict();

export const AuthUserCreateOrConnectWithoutDogsInputObjectSchema = Schema;
