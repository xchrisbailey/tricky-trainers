import { z } from 'zod';
import { AuthSessionWhereUniqueInputObjectSchema } from './objects/AuthSessionWhereUniqueInput.schema';

export const AuthSessionFindUniqueSchema = z.object({
  where: AuthSessionWhereUniqueInputObjectSchema
});
