import { z } from 'zod';
import { AuthUserWhereInputObjectSchema } from './objects/AuthUserWhereInput.schema';

export const AuthUserDeleteManySchema = z.object({
  where: AuthUserWhereInputObjectSchema.optional()
});
