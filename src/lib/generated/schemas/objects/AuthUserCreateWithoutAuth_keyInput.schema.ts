import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInput.schema';
import { DogCreateNestedManyWithoutAuthUserInputObjectSchema } from './DogCreateNestedManyWithoutAuthUserInput.schema';
import { TrickCreateNestedManyWithoutUserInputObjectSchema } from './TrickCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_keyInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    auth_session: z
      .lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputObjectSchema)
      .optional(),
    dogs: z.lazy(() => DogCreateNestedManyWithoutAuthUserInputObjectSchema).optional(),
    tricks: z.lazy(() => TrickCreateNestedManyWithoutUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserCreateWithoutAuth_keyInputObjectSchema = Schema;
