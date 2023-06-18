import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInputSchema';
import { AuthKeyCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInputSchema';
import { DogCreateNestedManyWithoutAuthUserInputSchema } from './DogCreateNestedManyWithoutAuthUserInputSchema';

export const AuthUserCreateWithoutTricksInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutTricksInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional(),
  dogs: z.lazy(() => DogCreateNestedManyWithoutAuthUserInputSchema).optional()
}).strict();

export default AuthUserCreateWithoutTricksInputSchema;
