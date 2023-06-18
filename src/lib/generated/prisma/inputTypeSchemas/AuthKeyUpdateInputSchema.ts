import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableBigIntFieldUpdateOperationsInputSchema } from './NullableBigIntFieldUpdateOperationsInputSchema';
import { AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema } from './AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema';

export const AuthKeyUpdateInputSchema: z.ZodType<Prisma.AuthKeyUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashed_password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  primary_key: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  auth_user: z.lazy(() => AuthUserUpdateOneRequiredWithoutAuth_keyNestedInputSchema).optional()
}).strict();

export default AuthKeyUpdateInputSchema;
