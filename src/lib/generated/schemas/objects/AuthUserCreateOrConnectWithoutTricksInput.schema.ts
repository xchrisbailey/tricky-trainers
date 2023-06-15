import { z } from 'zod';
import { AuthUserWhereUniqueInputObjectSchema } from './AuthUserWhereUniqueInput.schema';
import { AuthUserCreateWithoutTricksInputObjectSchema } from './AuthUserCreateWithoutTricksInput.schema';
import { AuthUserUncheckedCreateWithoutTricksInputObjectSchema } from './AuthUserUncheckedCreateWithoutTricksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutTricksInput> = z
  .object({
    where: z.lazy(() => AuthUserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AuthUserCreateWithoutTricksInputObjectSchema),
      z.lazy(() => AuthUserUncheckedCreateWithoutTricksInputObjectSchema)
    ])
  })
  .strict();

export const AuthUserCreateOrConnectWithoutTricksInputObjectSchema = Schema;
