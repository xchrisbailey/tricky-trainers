import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInputSchema';
import { DogCreateNestedManyWithoutUserInputSchema } from './DogCreateNestedManyWithoutUserInputSchema';
import { TrickCreateNestedManyWithoutUserInputSchema } from './TrickCreateNestedManyWithoutUserInputSchema';
import { TrainingLogCreateNestedManyWithoutUserInputSchema } from './TrainingLogCreateNestedManyWithoutUserInputSchema';

export const AuthUserCreateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_keyInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
  dogs: z.lazy(() => DogCreateNestedManyWithoutUserInputSchema).optional(),
  tricks: z.lazy(() => TrickCreateNestedManyWithoutUserInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default AuthUserCreateWithoutAuth_keyInputSchema;
