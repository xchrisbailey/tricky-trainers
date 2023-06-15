import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInput.schema';
import { TrickUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TrickUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_sessionInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    auth_key: z
      .lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
      .optional(),
    dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema).optional(),
    tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema = Schema;
