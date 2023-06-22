import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserCreateWithoutTrainingLogInputSchema } from './AuthUserCreateWithoutTrainingLogInputSchema';
import { AuthUserUncheckedCreateWithoutTrainingLogInputSchema } from './AuthUserUncheckedCreateWithoutTrainingLogInputSchema';

export const AuthUserCreateOrConnectWithoutTrainingLogInputSchema: z.ZodType<Prisma.AuthUserCreateOrConnectWithoutTrainingLogInput> =
  z
    .object({
      where: z.lazy(() => AuthUserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AuthUserCreateWithoutTrainingLogInputSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutTrainingLogInputSchema)
      ])
    })
    .strict();

export default AuthUserCreateOrConnectWithoutTrainingLogInputSchema;
