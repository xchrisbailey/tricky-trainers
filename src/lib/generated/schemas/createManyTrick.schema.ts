import { z } from 'zod';
import { TrickCreateManyInputObjectSchema } from './objects/TrickCreateManyInput.schema';

export const TrickCreateManySchema = z.object({
  data: z.union([TrickCreateManyInputObjectSchema, z.array(TrickCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional()
});
