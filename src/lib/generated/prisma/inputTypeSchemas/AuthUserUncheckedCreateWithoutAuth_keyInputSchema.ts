import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInputSchema';
import { TrickUncheckedCreateNestedManyWithoutUserInputSchema } from './TrickUncheckedCreateNestedManyWithoutUserInputSchema';

export const AuthUserUncheckedCreateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_keyInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputSchema).optional(),
  tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default AuthUserUncheckedCreateWithoutAuth_keyInputSchema;
