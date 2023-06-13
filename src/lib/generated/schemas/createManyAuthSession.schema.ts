import { z } from 'zod';
import { AuthSessionCreateManyInputObjectSchema } from './objects/AuthSessionCreateManyInput.schema';

export const AuthSessionCreateManySchema = z.object({
  data: z.union([
    AuthSessionCreateManyInputObjectSchema,
    z.array(AuthSessionCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
