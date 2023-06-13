import { z } from 'zod';
import { DogCreateManyInputObjectSchema } from './objects/DogCreateManyInput.schema';

export const DogCreateManySchema = z.object({
  data: z.union([DogCreateManyInputObjectSchema, z.array(DogCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional()
});
