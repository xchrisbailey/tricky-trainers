import { z } from 'zod';
import { AuthUserWhereInputObjectSchema } from './objects/AuthUserWhereInput.schema';
import { AuthUserOrderByWithAggregationInputObjectSchema } from './objects/AuthUserOrderByWithAggregationInput.schema';
import { AuthUserScalarWhereWithAggregatesInputObjectSchema } from './objects/AuthUserScalarWhereWithAggregatesInput.schema';
import { AuthUserScalarFieldEnumSchema } from './enums/AuthUserScalarFieldEnum.schema';

export const AuthUserGroupBySchema = z.object({
  where: AuthUserWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AuthUserOrderByWithAggregationInputObjectSchema,
      AuthUserOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: AuthUserScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AuthUserScalarFieldEnumSchema)
});
