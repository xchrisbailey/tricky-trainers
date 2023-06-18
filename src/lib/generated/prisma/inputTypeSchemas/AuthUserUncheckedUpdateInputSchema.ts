import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema';
import { AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema';
import { DogUncheckedUpdateManyWithoutAuthUserNestedInputSchema } from './DogUncheckedUpdateManyWithoutAuthUserNestedInputSchema';
import { TrickUncheckedUpdateManyWithoutUserNestedInputSchema } from './TrickUncheckedUpdateManyWithoutUserNestedInputSchema';
import { TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema } from './TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema';

export const AuthUserUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  dogs: z.lazy(() => DogUncheckedUpdateManyWithoutAuthUserNestedInputSchema).optional(),
  tricks: z.lazy(() => TrickUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default AuthUserUncheckedUpdateInputSchema;
