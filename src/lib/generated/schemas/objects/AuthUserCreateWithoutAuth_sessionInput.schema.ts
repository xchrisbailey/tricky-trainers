import { z } from 'zod';
import { AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInput.schema';
import { DogCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogCreateNestedManyWithoutAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_sessionInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema).optional(),
    dogs: z.lazy(() => DogCreateNestedManyWithoutAuthUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserCreateWithoutAuth_sessionInputObjectSchema = Schema;
