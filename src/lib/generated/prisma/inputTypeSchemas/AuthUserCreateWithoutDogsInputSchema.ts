import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInputSchema';
import { AuthKeyCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInputSchema';
import { TrickCreateNestedManyWithoutUserInputSchema } from './TrickCreateNestedManyWithoutUserInputSchema';

export const AuthUserCreateWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutDogsInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional(),
  tricks: z.lazy(() => TrickCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default AuthUserCreateWithoutDogsInputSchema;
