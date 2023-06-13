import { z } from 'zod';
import { AuthUserUpdateManyMutationInputObjectSchema } from './objects/AuthUserUpdateManyMutationInput.schema';
import { AuthUserWhereInputObjectSchema } from './objects/AuthUserWhereInput.schema';

export const AuthUserUpdateManySchema = z.object({
  data: AuthUserUpdateManyMutationInputObjectSchema,
  where: AuthUserWhereInputObjectSchema.optional()
});
