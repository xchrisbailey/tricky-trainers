import { z } from 'zod';
import { TrickWhereInputObjectSchema } from './objects/TrickWhereInput.schema';
import { TrickOrderByWithAggregationInputObjectSchema } from './objects/TrickOrderByWithAggregationInput.schema';
import { TrickScalarWhereWithAggregatesInputObjectSchema } from './objects/TrickScalarWhereWithAggregatesInput.schema';
import { TrickScalarFieldEnumSchema } from './enums/TrickScalarFieldEnum.schema';

export const TrickGroupBySchema = z.object({
  where: TrickWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TrickOrderByWithAggregationInputObjectSchema,
      TrickOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: TrickScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TrickScalarFieldEnumSchema)
});
