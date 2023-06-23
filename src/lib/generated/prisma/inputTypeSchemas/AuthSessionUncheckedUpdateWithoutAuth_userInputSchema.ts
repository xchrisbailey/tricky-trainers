import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BigIntFieldUpdateOperationsInputSchema } from './BigIntFieldUpdateOperationsInputSchema';

export const AuthSessionUncheckedUpdateWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthSessionUncheckedUpdateWithoutAuth_userInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  active_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  idle_expires: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default AuthSessionUncheckedUpdateWithoutAuth_userInputSchema;
