import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { AuthSessionUpdateManyWithoutAuth_userNestedInputSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInputSchema';
import { AuthKeyUpdateManyWithoutAuth_userNestedInputSchema } from './AuthKeyUpdateManyWithoutAuth_userNestedInputSchema';
import { TrickUpdateManyWithoutUserNestedInputSchema } from './TrickUpdateManyWithoutUserNestedInputSchema';
import { TrainingLogUpdateManyWithoutUserNestedInputSchema } from './TrainingLogUpdateManyWithoutUserNestedInputSchema';

export const AuthUserUpdateWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserUpdateWithoutDogsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  tricks: z.lazy(() => TrickUpdateManyWithoutUserNestedInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default AuthUserUpdateWithoutDogsInputSchema;
