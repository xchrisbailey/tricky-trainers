import { z } from 'zod';
import { AuthUserCreateManyInputObjectSchema } from './objects/AuthUserCreateManyInput.schema';

export const AuthUserCreateManySchema = z.object({
  data: z.union([
    AuthUserCreateManyInputObjectSchema,
    z.array(AuthUserCreateManyInputObjectSchema)
  ]),
  skipDuplicates: z.boolean().optional()
});
