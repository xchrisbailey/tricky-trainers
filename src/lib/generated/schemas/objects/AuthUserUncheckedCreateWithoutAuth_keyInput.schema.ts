import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInput.schema';
import { TrickUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TrickUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_keyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    auth_session: z
      .lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
      .optional(),
    dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema).optional(),
    tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedCreateWithoutAuth_keyInputObjectSchema = Schema;
