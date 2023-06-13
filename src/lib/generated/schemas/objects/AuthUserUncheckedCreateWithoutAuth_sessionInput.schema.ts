import { z } from 'zod';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_sessionInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    auth_key: z
      .lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema)
      .optional(),
    dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedCreateWithoutAuth_sessionInputObjectSchema = Schema;
