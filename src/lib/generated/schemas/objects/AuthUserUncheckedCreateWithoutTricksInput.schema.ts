import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutTricksInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    auth_session: z
      .lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
      .optional(),
    auth_key: z
      .lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
      .optional(),
    dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedCreateWithoutTricksInputObjectSchema = Schema;
