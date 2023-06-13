import { z } from 'zod';
import { DogWhereInputObjectSchema } from './objects/DogWhereInput.schema';
import { DogOrderByWithAggregationInputObjectSchema } from './objects/DogOrderByWithAggregationInput.schema';
import { DogScalarWhereWithAggregatesInputObjectSchema } from './objects/DogScalarWhereWithAggregatesInput.schema';
import { DogScalarFieldEnumSchema } from './enums/DogScalarFieldEnum.schema';

export const DogGroupBySchema = z.object({
  where: DogWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DogOrderByWithAggregationInputObjectSchema,
      DogOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: DogScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DogScalarFieldEnumSchema)
});
