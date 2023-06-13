import { z } from 'zod';
import { AuthUserCreateInputObjectSchema } from './objects/AuthUserCreateInput.schema';
import { AuthUserUncheckedCreateInputObjectSchema } from './objects/AuthUserUncheckedCreateInput.schema';

export const AuthUserCreateOneSchema = z.object({
  data: z.union([AuthUserCreateInputObjectSchema, AuthUserUncheckedCreateInputObjectSchema])
});
