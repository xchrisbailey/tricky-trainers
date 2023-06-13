import { z } from 'zod';
import { DogWhereUniqueInputObjectSchema } from './objects/DogWhereUniqueInput.schema';
import { DogCreateInputObjectSchema } from './objects/DogCreateInput.schema';
import { DogUncheckedCreateInputObjectSchema } from './objects/DogUncheckedCreateInput.schema';
import { DogUpdateInputObjectSchema } from './objects/DogUpdateInput.schema';
import { DogUncheckedUpdateInputObjectSchema } from './objects/DogUncheckedUpdateInput.schema';

export const DogUpsertSchema = z.object({
  where: DogWhereUniqueInputObjectSchema,
  create: z.union([DogCreateInputObjectSchema, DogUncheckedCreateInputObjectSchema]),
  update: z.union([DogUpdateInputObjectSchema, DogUncheckedUpdateInputObjectSchema])
});
