import { z } from 'zod';
import { AuthUserOrderByWithRelationInputObjectSchema } from './objects/AuthUserOrderByWithRelationInput.schema';
import { AuthUserWhereInputObjectSchema } from './objects/AuthUserWhereInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './objects/AuthUserWhereUniqueInput.schema';
import { AuthUserCountAggregateInputObjectSchema } from './objects/AuthUserCountAggregateInput.schema';
import { AuthUserMinAggregateInputObjectSchema } from './objects/AuthUserMinAggregateInput.schema';
import { AuthUserMaxAggregateInputObjectSchema } from './objects/AuthUserMaxAggregateInput.schema';

export const AuthUserAggregateSchema = z.object({
  orderBy: z
    .union([
      AuthUserOrderByWithRelationInputObjectSchema,
      AuthUserOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AuthUserWhereInputObjectSchema.optional(),
  cursor: AuthUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), AuthUserCountAggregateInputObjectSchema]).optional(),
  _min: AuthUserMinAggregateInputObjectSchema.optional(),
  _max: AuthUserMaxAggregateInputObjectSchema.optional()
});
