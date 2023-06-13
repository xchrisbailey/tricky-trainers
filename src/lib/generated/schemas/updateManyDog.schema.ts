import { z } from 'zod';
import { DogUpdateManyMutationInputObjectSchema } from './objects/DogUpdateManyMutationInput.schema';
import { DogWhereInputObjectSchema } from './objects/DogWhereInput.schema';

export const DogUpdateManySchema = z.object({
  data: DogUpdateManyMutationInputObjectSchema,
  where: DogWhereInputObjectSchema.optional()
});
