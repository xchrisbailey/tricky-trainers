import { z } from 'zod';
import { DogOrderByWithRelationInputObjectSchema } from './objects/DogOrderByWithRelationInput.schema';
import { DogWhereInputObjectSchema } from './objects/DogWhereInput.schema';
import { DogWhereUniqueInputObjectSchema } from './objects/DogWhereUniqueInput.schema';
import { DogScalarFieldEnumSchema } from './enums/DogScalarFieldEnum.schema';

export const DogFindManySchema = z.object({
  orderBy: z
    .union([
      DogOrderByWithRelationInputObjectSchema,
      DogOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: DogWhereInputObjectSchema.optional(),
  cursor: DogWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DogScalarFieldEnumSchema).optional()
});
