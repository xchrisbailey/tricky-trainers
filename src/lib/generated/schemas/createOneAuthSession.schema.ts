import { z } from 'zod';
import { AuthSessionCreateInputObjectSchema } from './objects/AuthSessionCreateInput.schema';
import { AuthSessionUncheckedCreateInputObjectSchema } from './objects/AuthSessionUncheckedCreateInput.schema';

export const AuthSessionCreateOneSchema = z.object({
  data: z.union([AuthSessionCreateInputObjectSchema, AuthSessionUncheckedCreateInputObjectSchema])
});
