import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { AuthSessionUpdateManyWithoutAuth_userNestedInputSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInputSchema';
import { AuthKeyUpdateManyWithoutAuth_userNestedInputSchema } from './AuthKeyUpdateManyWithoutAuth_userNestedInputSchema';
import { DogUpdateManyWithoutAuthUserNestedInputSchema } from './DogUpdateManyWithoutAuthUserNestedInputSchema';
import { TrickUpdateManyWithoutUserNestedInputSchema } from './TrickUpdateManyWithoutUserNestedInputSchema';

export const AuthUserUpdateWithoutTrainingLogInputSchema: z.ZodType<Prisma.AuthUserUpdateWithoutTrainingLogInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  dogs: z.lazy(() => DogUpdateManyWithoutAuthUserNestedInputSchema).optional(),
  tricks: z.lazy(() => TrickUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default AuthUserUpdateWithoutTrainingLogInputSchema;
