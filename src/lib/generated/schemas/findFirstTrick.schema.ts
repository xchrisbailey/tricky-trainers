import { z } from 'zod';
import { TrickOrderByWithRelationInputObjectSchema } from './objects/TrickOrderByWithRelationInput.schema';
import { TrickWhereInputObjectSchema } from './objects/TrickWhereInput.schema';
import { TrickWhereUniqueInputObjectSchema } from './objects/TrickWhereUniqueInput.schema';
import { TrickScalarFieldEnumSchema } from './enums/TrickScalarFieldEnum.schema';

export const TrickFindFirstSchema = z.object({
  orderBy: z
    .union([
      TrickOrderByWithRelationInputObjectSchema,
      TrickOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: TrickWhereInputObjectSchema.optional(),
  cursor: TrickWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TrickScalarFieldEnumSchema).optional()
});
