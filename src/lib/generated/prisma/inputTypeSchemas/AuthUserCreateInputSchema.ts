import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { AuthSessionCreateNestedManyWithoutAuth_userInputSchema } from './AuthSessionCreateNestedManyWithoutAuth_userInputSchema';
import { AuthKeyCreateNestedManyWithoutAuth_userInputSchema } from './AuthKeyCreateNestedManyWithoutAuth_userInputSchema';
import { DogCreateNestedManyWithoutUserInputSchema } from './DogCreateNestedManyWithoutUserInputSchema';
import { TrickCreateNestedManyWithoutUserInputSchema } from './TrickCreateNestedManyWithoutUserInputSchema';
import { TrainingLogCreateNestedManyWithoutUserInputSchema } from './TrainingLogCreateNestedManyWithoutUserInputSchema';

export const AuthUserCreateInputSchema: z.ZodType<Prisma.AuthUserCreateInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.lazy(() => RoleSchema).optional(),
    auth_session: z.lazy(() => AuthSessionCreateNestedManyWithoutAuth_userInputSchema).optional(),
    auth_key: z.lazy(() => AuthKeyCreateNestedManyWithoutAuth_userInputSchema).optional(),
    dogs: z.lazy(() => DogCreateNestedManyWithoutUserInputSchema).optional(),
    tricks: z.lazy(() => TrickCreateNestedManyWithoutUserInputSchema).optional(),
    TrainingLog: z.lazy(() => TrainingLogCreateNestedManyWithoutUserInputSchema).optional()
  })
  .strict();

export default AuthUserCreateInputSchema;
