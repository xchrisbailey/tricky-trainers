import { z } from 'zod';
import { AuthUserCreateWithoutTricksInputObjectSchema } from './AuthUserCreateWithoutTricksInput.schema';
import { AuthUserUncheckedCreateWithoutTricksInputObjectSchema } from './AuthUserUncheckedCreateWithoutTricksInput.schema';
import { AuthUserCreateOrConnectWithoutTricksInputObjectSchema } from './AuthUserCreateOrConnectWithoutTricksInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutTricksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthUserCreateWithoutTricksInputObjectSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputObjectSchema)
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutTricksInputObjectSchema).optional(),
    connect: z.lazy(() => AuthUserWhereUniqueInputObjectSchema).optional()
  })
  .strict();

export const AuthUserCreateNestedOneWithoutTricksInputObjectSchema = Schema;
