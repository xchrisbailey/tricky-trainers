import { z } from 'zod';
import { AuthSessionWhereInputObjectSchema } from './objects/AuthSessionWhereInput.schema';
import { AuthSessionOrderByWithAggregationInputObjectSchema } from './objects/AuthSessionOrderByWithAggregationInput.schema';
import { AuthSessionScalarWhereWithAggregatesInputObjectSchema } from './objects/AuthSessionScalarWhereWithAggregatesInput.schema';
import { AuthSessionScalarFieldEnumSchema } from './enums/AuthSessionScalarFieldEnum.schema';

export const AuthSessionGroupBySchema = z.object({
  where: AuthSessionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AuthSessionOrderByWithAggregationInputObjectSchema,
      AuthSessionOrderByWithAggregationInputObjectSchema.array()
    ])
    .optional(),
  having: AuthSessionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AuthSessionScalarFieldEnumSchema)
});
