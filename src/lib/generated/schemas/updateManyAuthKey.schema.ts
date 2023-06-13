import { z } from 'zod';
import { AuthKeyUpdateManyMutationInputObjectSchema } from './objects/AuthKeyUpdateManyMutationInput.schema';
import { AuthKeyWhereInputObjectSchema } from './objects/AuthKeyWhereInput.schema';

export const AuthKeyUpdateManySchema = z.object({
  data: AuthKeyUpdateManyMutationInputObjectSchema,
  where: AuthKeyWhereInputObjectSchema.optional()
});
