import { z } from 'zod';
import { TrickOrderByWithRelationInputObjectSchema } from './objects/TrickOrderByWithRelationInput.schema';
import { TrickWhereInputObjectSchema } from './objects/TrickWhereInput.schema';
import { TrickWhereUniqueInputObjectSchema } from './objects/TrickWhereUniqueInput.schema';
import { TrickCountAggregateInputObjectSchema } from './objects/TrickCountAggregateInput.schema';
import { TrickMinAggregateInputObjectSchema } from './objects/TrickMinAggregateInput.schema';
import { TrickMaxAggregateInputObjectSchema } from './objects/TrickMaxAggregateInput.schema';
import { TrickAvgAggregateInputObjectSchema } from './objects/TrickAvgAggregateInput.schema';
import { TrickSumAggregateInputObjectSchema } from './objects/TrickSumAggregateInput.schema';

export const TrickAggregateSchema = z.object({
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
  _count: z.union([z.literal(true), TrickCountAggregateInputObjectSchema]).optional(),
  _min: TrickMinAggregateInputObjectSchema.optional(),
  _max: TrickMaxAggregateInputObjectSchema.optional(),
  _avg: TrickAvgAggregateInputObjectSchema.optional(),
  _sum: TrickSumAggregateInputObjectSchema.optional()
});
