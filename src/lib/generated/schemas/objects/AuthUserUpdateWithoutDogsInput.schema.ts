import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInput.schema';
import { AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUpdateManyWithoutAuth_userNestedInput.schema';
import { TrickUpdateManyWithoutUserNestedInputObjectSchema } from './TrickUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpdateWithoutDogsInput> = z
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
      .lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema)
      .optional(),
    auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema).optional(),
    tricks: z.lazy(() => TrickUpdateManyWithoutUserNestedInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUpdateWithoutDogsInputObjectSchema = Schema;
