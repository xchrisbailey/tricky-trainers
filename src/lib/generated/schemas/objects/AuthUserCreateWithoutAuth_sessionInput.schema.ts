import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInput.schema';
import { DogCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogCreateNestedManyWithoutAuthUserInput.schema';
import { TrickCreateNestedManyWithoutUserInputObjectSchema } from './TrickCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_sessionInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputObjectSchema).optional(),
    dogs: z.lazy(() => DogCreateNestedManyWithoutAuthUserInputObjectSchema).optional(),
    tricks: z.lazy(() => TrickCreateNestedManyWithoutUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserCreateWithoutAuth_sessionInputObjectSchema = Schema;
