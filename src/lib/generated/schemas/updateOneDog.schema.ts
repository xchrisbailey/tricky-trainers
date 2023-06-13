import { z } from 'zod';
import { DogUpdateInputObjectSchema } from './objects/DogUpdateInput.schema';
import { DogUncheckedUpdateInputObjectSchema } from './objects/DogUncheckedUpdateInput.schema';
import { DogWhereUniqueInputObjectSchema } from './objects/DogWhereUniqueInput.schema';

export const DogUpdateOneSchema = z.object({
  data: z.union([DogUpdateInputObjectSchema, DogUncheckedUpdateInputObjectSchema]),
  where: DogWhereUniqueInputObjectSchema
});
