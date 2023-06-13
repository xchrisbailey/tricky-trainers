import { z } from 'zod';
import { AuthKeyCreateInputObjectSchema } from './objects/AuthKeyCreateInput.schema';
import { AuthKeyUncheckedCreateInputObjectSchema } from './objects/AuthKeyUncheckedCreateInput.schema';

export const AuthKeyCreateOneSchema = z.object({
  data: z.union([AuthKeyCreateInputObjectSchema, AuthKeyUncheckedCreateInputObjectSchema])
});
