import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthKeyCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInputSchema';
import { DogCreateNestedManyWithoutAuthUserInputSchema } from './DogCreateNestedManyWithoutAuthUserInputSchema';
import { TrickCreateNestedManyWithoutUserInputSchema } from './TrickCreateNestedManyWithoutUserInputSchema';
import { TrainingLogCreateNestedManyWithoutUserInputSchema } from './TrainingLogCreateNestedManyWithoutUserInputSchema';

export const AuthUserCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserCreateWithoutAuth_sessionInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional(),
  dogs: z.lazy(() => DogCreateNestedManyWithoutAuthUserInputSchema).optional(),
  tricks: z.lazy(() => TrickCreateNestedManyWithoutUserInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default AuthUserCreateWithoutAuth_sessionInputSchema;
