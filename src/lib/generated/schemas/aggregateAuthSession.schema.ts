import { z } from 'zod';
import { AuthSessionOrderByWithRelationInputObjectSchema } from './objects/AuthSessionOrderByWithRelationInput.schema';
import { AuthSessionWhereInputObjectSchema } from './objects/AuthSessionWhereInput.schema';
import { AuthSessionWhereUniqueInputObjectSchema } from './objects/AuthSessionWhereUniqueInput.schema';
import { AuthSessionCountAggregateInputObjectSchema } from './objects/AuthSessionCountAggregateInput.schema';
import { AuthSessionMinAggregateInputObjectSchema } from './objects/AuthSessionMinAggregateInput.schema';
import { AuthSessionMaxAggregateInputObjectSchema } from './objects/AuthSessionMaxAggregateInput.schema';
import { AuthSessionAvgAggregateInputObjectSchema } from './objects/AuthSessionAvgAggregateInput.schema';
import { AuthSessionSumAggregateInputObjectSchema } from './objects/AuthSessionSumAggregateInput.schema';

export const AuthSessionAggregateSchema = z.object({
  orderBy: z
    .union([
      AuthSessionOrderByWithRelationInputObjectSchema,
      AuthSessionOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AuthSessionWhereInputObjectSchema.optional(),
  cursor: AuthSessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), AuthSessionCountAggregateInputObjectSchema]).optional(),
  _min: AuthSessionMinAggregateInputObjectSchema.optional(),
  _max: AuthSessionMaxAggregateInputObjectSchema.optional(),
  _avg: AuthSessionAvgAggregateInputObjectSchema.optional(),
  _sum: AuthSessionSumAggregateInputObjectSchema.optional()
});
