import { z } from 'zod';
import { AuthSessionUpdateManyMutationInputObjectSchema } from './objects/AuthSessionUpdateManyMutationInput.schema';
import { AuthSessionWhereInputObjectSchema } from './objects/AuthSessionWhereInput.schema';

export const AuthSessionUpdateManySchema = z.object({
  data: AuthSessionUpdateManyMutationInputObjectSchema,
  where: AuthSessionWhereInputObjectSchema.optional()
});
