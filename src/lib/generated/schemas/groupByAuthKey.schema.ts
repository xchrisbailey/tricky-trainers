import { z } from 'zod';
import { AuthKeyWhereInputObjectSchema } from './objects/AuthKeyWhereInput.schema';
import { AuthKeyOrderByWithAggregationInputObjectSchema } from './objects/AuthKeyOrderByWithAggregationInput.schema';
import { AuthKeyScalarWhereWithAggregatesInputObjectSchema } from './objects/AuthKeyScalarWhereWithAggregatesInput.schema';
import { AuthKeyScalarFieldEnumSchema } from './enums/AuthKeyScalarFieldEnum.schema';

export const AuthKeyGroupBySchema = z.object({
  where: AuthKeyWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AuthKeyOrderByWithAggregationInputObjectSchema,
      AuthKeyOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: AuthKeyScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AuthKeyScalarFieldEnumSchema)
});
