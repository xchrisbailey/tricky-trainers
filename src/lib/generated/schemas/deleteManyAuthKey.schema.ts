import { z } from 'zod';
import { AuthKeyWhereInputObjectSchema } from './objects/AuthKeyWhereInput.schema';

export const AuthKeyDeleteManySchema = z.object({
  where: AuthKeyWhereInputObjectSchema.optional()
});
