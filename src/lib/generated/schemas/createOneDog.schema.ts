import { z } from 'zod';
import { DogCreateInputObjectSchema } from './objects/DogCreateInput.schema';
import { DogUncheckedCreateInputObjectSchema } from './objects/DogUncheckedCreateInput.schema';

export const DogCreateOneSchema = z.object({
  data: z.union([DogCreateInputObjectSchema, DogUncheckedCreateInputObjectSchema])
});
