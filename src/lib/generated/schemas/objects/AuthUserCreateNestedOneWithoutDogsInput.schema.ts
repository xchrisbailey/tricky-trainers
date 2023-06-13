import { z } from 'zod';
import { AuthUserCreateWithoutDogsInputObjectSchema } from './AuthUserCreateWithoutDogsInput.schema';
import { AuthUserUncheckedCreateWithoutDogsInputObjectSchema } from './AuthUserUncheckedCreateWithoutDogsInput.schema';
import { AuthUserCreateOrConnectWithoutDogsInputObjectSchema } from './AuthUserCreateOrConnectWithoutDogsInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutDogsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthUserCreateWithoutDogsInputObjectSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutDogsInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutDogsInputObjectSchema).optional(),
    connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const AuthUserCreateNestedOneWithoutDogsInputObjectSchema = Schema;
