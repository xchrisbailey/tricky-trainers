import { z } from 'zod';
import { AuthKeyOrderByWithRelationInputObjectSchema } from './objects/AuthKeyOrderByWithRelationInput.schema';
import { AuthKeyWhereInputObjectSchema } from './objects/AuthKeyWhereInput.schema';
import { AuthKeyWhereUniqueInputObjectSchema } from './objects/AuthKeyWhereUniqueInput.schema';
import { AuthKeyCountAggregateInputObjectSchema } from './objects/AuthKeyCountAggregateInput.schema';
import { AuthKeyMinAggregateInputObjectSchema } from './objects/AuthKeyMinAggregateInput.schema';
import { AuthKeyMaxAggregateInputObjectSchema } from './objects/AuthKeyMaxAggregateInput.schema';
import { AuthKeyAvgAggregateInputObjectSchema } from './objects/AuthKeyAvgAggregateInput.schema';
import { AuthKeySumAggregateInputObjectSchema } from './objects/AuthKeySumAggregateInput.schema';

export const AuthKeyAggregateSchema = z.object({
  orderBy: z
    .union([
      AuthKeyOrderByWithRelationInputObjectSchema,
      AuthKeyOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AuthKeyWhereInputObjectSchema.optional(),
  cursor: AuthKeyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), AuthKeyCountAggregateInputObjectSchema]).optional(),
  _min: AuthKeyMinAggregateInputObjectSchema.optional(),
  _max: AuthKeyMaxAggregateInputObjectSchema.optional(),
  _avg: AuthKeyAvgAggregateInputObjectSchema.optional(),
  _sum: AuthKeySumAggregateInputObjectSchema.optional()
});
