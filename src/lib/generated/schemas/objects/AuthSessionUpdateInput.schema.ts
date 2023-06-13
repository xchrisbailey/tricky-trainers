import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputObjectSchema } from './AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthSessionUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    active_expires: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    idle_expires: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    auth_user: z
      .lazy(() => AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputObjectSchema)
      .optional()
  })
  .strict();

export const AuthSessionUpdateInputObjectSchema = Schema;
