import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { DogUncheckedCreateNestedManyWithoutUserInputSchema } from './DogUncheckedCreateNestedManyWithoutUserInputSchema';
import { TrickUncheckedCreateNestedManyWithoutUserInputSchema } from './TrickUncheckedCreateNestedManyWithoutUserInputSchema';
import { TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema } from './TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema';

export const AuthUserUncheckedCreateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_keyInput> =
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
      dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
      tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
      TrainingLog: z
        .lazy(() => TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional()
    })
    .strict();

export default AuthUserUncheckedCreateWithoutAuth_keyInputSchema;
