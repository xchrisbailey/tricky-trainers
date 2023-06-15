import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputObjectSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput.schema';
import { TrickUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TrickUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutDogsInput> = z
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
    tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedCreateWithoutDogsInputObjectSchema = Schema;
