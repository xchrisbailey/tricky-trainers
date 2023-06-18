import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema';
import { AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema';
import { TrickUncheckedUpdateManyWithoutUserNestedInputSchema } from './TrickUncheckedUpdateManyWithoutUserNestedInputSchema';

export const AuthUserUncheckedUpdateWithoutDogsInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutDogsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  auth_key: z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema).optional(),
  tricks: z.lazy(() => TrickUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default AuthUserUncheckedUpdateWithoutDogsInputSchema;
