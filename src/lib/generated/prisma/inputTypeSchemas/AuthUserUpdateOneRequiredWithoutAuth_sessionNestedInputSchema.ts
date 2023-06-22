import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutAuth_sessionInputSchema } from './AuthUserCreateWithoutAuth_sessionInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_sessionInputSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInputSchema';
import { AuthUserCreateOrConnectWithoutAuth_sessionInputSchema } from './AuthUserCreateOrConnectWithoutAuth_sessionInputSchema';
import { AuthUserUpsertWithoutAuth_sessionInputSchema } from './AuthUserUpsertWithoutAuth_sessionInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserUpdateWithoutAuth_sessionInputSchema } from './AuthUserUpdateWithoutAuth_sessionInputSchema';
import { AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema } from './AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema';

export const AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AuthUserCreateWithoutAuth_sessionInputSchema),
          z.lazy(() => AuthUserUncheckedCreateWithoutAuth_sessionInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AuthUserCreateOrConnectWithoutAuth_sessionInputSchema)
        .optional(),
      upsert: z.lazy(() => AuthUserUpsertWithoutAuth_sessionInputSchema).optional(),
      connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => AuthUserUpdateWithoutAuth_sessionInputSchema),
          z.lazy(() => AuthUserUncheckedUpdateWithoutAuth_sessionInputSchema)
        ])
        .optional()
    })
    .strict();

export default AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema;
