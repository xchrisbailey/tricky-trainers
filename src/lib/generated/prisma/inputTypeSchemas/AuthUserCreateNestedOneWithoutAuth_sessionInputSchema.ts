import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutAuth_sessionInputSchema } from './AuthUserCreateWithoutAuth_sessionInputSchema';
import { AuthUserUncheckedCreateWithoutAuth_sessionInputSchema } from './AuthUserUncheckedCreateWithoutAuth_sessionInputSchema';
import { AuthUserCreateOrConnectWithoutAuth_sessionInputSchema } from './AuthUserCreateOrConnectWithoutAuth_sessionInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';

export const AuthUserCreateNestedOneWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutAuth_sessionInput> =
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
      connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
    })
    .strict();

export default AuthUserCreateNestedOneWithoutAuth_sessionInputSchema;
