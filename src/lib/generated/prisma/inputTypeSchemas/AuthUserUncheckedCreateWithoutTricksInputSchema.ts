import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInputSchema';
import { TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema } from './TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema';

export const AuthUserUncheckedCreateWithoutTricksInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutTricksInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default AuthUserUncheckedCreateWithoutTricksInputSchema;
