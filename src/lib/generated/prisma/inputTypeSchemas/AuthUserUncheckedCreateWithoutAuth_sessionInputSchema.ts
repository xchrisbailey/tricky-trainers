import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema';
import { DogUncheckedCreateNestedManyWithoutAuthUserInputSchema } from './DogUncheckedCreateNestedManyWithoutAuthUserInputSchema';
import { TrickUncheckedCreateNestedManyWithoutUserInputSchema } from './TrickUncheckedCreateNestedManyWithoutUserInputSchema';
import { TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema } from './TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema';

export const AuthUserUncheckedCreateWithoutAuth_sessionInputSchema: z.ZodType<Prisma.AuthUserUncheckedCreateWithoutAuth_sessionInput> = z.object({
  id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.lazy(() => RoleSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema).optional(),
  dogs: z.lazy(() => DogUncheckedCreateNestedManyWithoutAuthUserInputSchema).optional(),
  tricks: z.lazy(() => TrickUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default AuthUserUncheckedCreateWithoutAuth_sessionInputSchema;
