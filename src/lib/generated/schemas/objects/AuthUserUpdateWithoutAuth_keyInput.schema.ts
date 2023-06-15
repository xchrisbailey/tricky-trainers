import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AuthSessionUpdateManyWithoutAuth_userNestedInputObjectSchema } from './AuthSessionUpdateManyWithoutAuth_userNestedInput.schema';
import { DogUpdateManyWithoutAuthUserNestedInputObjectSchema } from './DogUpdateManyWithoutAuthUserNestedInput.schema';
import { TrickUpdateManyWithoutUserNestedInputObjectSchema } from './TrickUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthUserUpdateWithoutAuth_keyInput> = z
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
    dogs: z.lazy(() => DogUpdateManyWithoutAuthUserNestedInputObjectSchema).optional(),
    tricks: z.lazy(() => TrickUpdateManyWithoutUserNestedInputObjectSchema).optional()
  })
  .strict();

export const AuthUserUpdateWithoutAuth_keyInputObjectSchema = Schema;
