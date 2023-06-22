import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableBigIntFieldUpdateOperationsInputSchema } from './NullableBigIntFieldUpdateOperationsInputSchema';

export const AuthKeyUncheckedUpdateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateWithoutAuth_userInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      hashed_password: z
        .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable(),
      primary_key: z
        .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
        .optional(),
      expires: z
        .union([z.bigint(), z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema)])
        .optional()
        .nullable()
    })
    .strict();

export default AuthKeyUncheckedUpdateWithoutAuth_userInputSchema;
