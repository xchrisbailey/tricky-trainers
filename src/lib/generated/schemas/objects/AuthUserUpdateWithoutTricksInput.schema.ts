import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInput.schema';
import { AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthKeyUpdateManyWithoutAuth_userNestedInput.schema';
import { DogUpdateManyWithoutAuthUserNestedInputObjectSchema } from './DogUpdateManyWithoutAuthUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpdateWithoutTricksInput> = z
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
    auth_session: z
      .lazy(() => AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema)
      .optional(),
    auth_key: z.lazy(() => AuthKeyUpdateManyWithoutAuth_userNestedInputObjectSchema).optional(),
    dogs: z.lazy(() => DogUpdateManyWithoutAuthUserNestedInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUpdateWithoutTricksInputObjectSchema = Schema;