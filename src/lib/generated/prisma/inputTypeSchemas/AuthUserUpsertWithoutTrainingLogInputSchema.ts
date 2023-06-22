import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserUpdateWithoutTrainingLogInputSchema } from './AuthUserUpdateWithoutTrainingLogInputSchema';
import { AuthUserUncheckedUpdateWithoutTrainingLogInputSchema } from './AuthUserUncheckedUpdateWithoutTrainingLogInputSchema';
import { AuthUserCreateWithoutTrainingLogInputSchema } from './AuthUserCreateWithoutTrainingLogInputSchema';
import { AuthUserUncheckedCreateWithoutTrainingLogInputSchema } from './AuthUserUncheckedCreateWithoutTrainingLogInputSchema';

export const AuthUserUpsertWithoutTrainingLogInputSchema: z.ZodType<Prisma.AuthUserUpsertWithoutTrainingLogInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => AuthUserUpdateWithoutTrainingLogInputSchema),
        z.lazy(() => AuthUserUncheckedUpdateWithoutTrainingLogInputSchema)
      ]),
      create: z.union([
        z.lazy(() => AuthUserCreateWithoutTrainingLogInputSchema),
        z.lazy(() => AuthUserUncheckedCreateWithoutTrainingLogInputSchema)
      ])
    })
    .strict();

export default AuthUserUpsertWithoutTrainingLogInputSchema;
