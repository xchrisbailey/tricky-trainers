import { z } from 'zod';
import { AuthKeyCreateManyInputObjectSchema } from './objects/AuthKeyCreateManyInput.schema';

export const AuthKeyCreateManySchema = z.object({
  data: z.union([AuthKeyCreateManyInputObjectSchema, z.array(AuthKeyCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional()
});
