import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BigIntFieldUpdateOperationsInputSchema } from './BigIntFieldUpdateOperationsInputSchema';
import { AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema } from './AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema';

export const AuthSessionUpdateInputSchema: z.ZodType<Prisma.AuthSessionUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    active_expires: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)])
      .optional(),
    idle_expires: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)])
      .optional(),
    auth_user: z
      .lazy(() => AuthUserUpdateOneRequiredWithoutAuth_sessionNestedInputSchema)
      .optional()
  })
  .strict();

export default AuthSessionUpdateInputSchema;
