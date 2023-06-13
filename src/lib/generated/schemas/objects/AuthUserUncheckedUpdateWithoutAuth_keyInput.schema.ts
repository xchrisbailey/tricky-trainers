import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInput.schema';
import { DogUncheckedUpdateManyWithoutAuthUserNestedInputObjectSchema } from './DogUncheckedUpdateManyWithoutAuthUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutAuth_keyInput> = z
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
      .lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputObjectSchema)
      .optional(),
    dogs: z.lazy(() => DogUncheckedUpdateManyWithoutAuthUserNestedInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUncheckedUpdateWithoutAuth_keyInputObjectSchema = Schema;
