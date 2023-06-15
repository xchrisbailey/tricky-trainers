import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInput.schema';
import { AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInput.schema';
import { TrickUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TrickUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutDogsInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    first_name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    last_name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleSchema),
        z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)
      ])
      .optional(),
    auth_session: z
      .lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema)
      .optional(),
    auth_key: z
      .lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema)
      .optional(),
    tricks: z.lazy(() => TrickUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedUpdateWithoutDogsInputObjectSchema = Schema;
