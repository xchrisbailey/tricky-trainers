import { z } from 'zod';
import { AuthSessionWhereUniqueInputObjectSchema } from './objects/AuthSessionWhereUniqueInput.schema';

export const AuthSessionDeleteOneSchema = z.object({
  where: AuthSessionWhereUniqueInputObjectSchema
});
