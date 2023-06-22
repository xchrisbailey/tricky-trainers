import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { TrickUncheckedCreateNestedManyWithoutUserInputSchema } from './TrickUncheckedCreateNestedManyWithoutUserInputSchema';
import { TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema } from './TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema';

export const AuthUserUncheckedCreateWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutDogsInput> =
  z
    .object({
      id: z.string(),
      email: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      role: z.lazy(() => RoleSchema).optional(),
      auth_session: z
        .lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema)
        .optional(),
      auth_key: z
        .lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema)
        .optional(),
      tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
      TrainingLog: z
        .lazy(() => TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional()
    })
    .strict();

export default AuthUserUncheckedCreateWithoutDogsInputSchema;
