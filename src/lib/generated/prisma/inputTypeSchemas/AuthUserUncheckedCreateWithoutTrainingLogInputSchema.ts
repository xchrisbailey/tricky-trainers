import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { DogUncheckedCreateNestedManyWithoutUserInputSchema } from './DogUncheckedCreateNestedManyWithoutUserInputSchema';
import { TrickUncheckedCreateNestedManyWithoutUserInputSchema } from './TrickUncheckedCreateNestedManyWithoutUserInputSchema';

export const AuthUserUncheckedCreateWithoutTrainingLogInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutTrainingLogInput> =
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
      dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
      tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputSchema).optional()
    })
    .strict();

export default AuthUserUncheckedCreateWithoutTrainingLogInputSchema;
