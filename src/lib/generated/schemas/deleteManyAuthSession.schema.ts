import { z } from 'zod';
import { AuthSessionWhereInputObjectSchema } from './objects/AuthSessionWhereInput.schema';

export const AuthSessionDeleteManySchema = z.object({
  where: AuthSessionWhereInputObjectSchema.optional()
});
