import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { AuthSessionUpdateManyWithoutAuth_userNestedInputSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInputSchema';
import { DogUpdateManyWithoutUserNestedInputSchema } from './DogUpdateManyWithoutUserNestedInputSchema';
import { TrickUpdateManyWithoutUserNestedInputSchema } from './TrickUpdateManyWithoutUserNestedInputSchema';
import { TrainingLogUpdateManyWithoutUserNestedInputSchema } from './TrainingLogUpdateManyWithoutUserNestedInputSchema';

export const AuthUserUpdateWithoutAuth_keyInputSchema: z.ZodType<Prisma.AuthUserUpdateWithoutAuth_keyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  dogs: z.lazy(() => DogUpdateManyWithoutUserNestedInputSchema).optional(),
  tricks: z.lazy(() => TrickUpdateManyWithoutUserNestedInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default AuthUserUpdateWithoutAuth_keyInputSchema;
