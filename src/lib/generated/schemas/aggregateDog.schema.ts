import { z } from 'zod';
import { DogOrderByWithRelationInputObjectSchema } from './objects/DogOrderByWithRelationInput.schema';
import { DogWhereInputObjectSchema } from './objects/DogWhereInput.schema';
import { DogWhereUniqueInputObjectSchema } from './objects/DogWhereUniqueInput.schema';
import { DogCountAggregateInputObjectSchema } from './objects/DogCountAggregateInput.schema';
import { DogMinAggregateInputObjectSchema } from './objects/DogMinAggregateInput.schema';
import { DogMaxAggregateInputObjectSchema } from './objects/DogMaxAggregateInput.schema';
import { DogAvgAggregateInputObjectSchema } from './objects/DogAvgAggregateInput.schema';
import { DogSumAggregateInputObjectSchema } from './objects/DogSumAggregateInput.schema';

export const DogAggregateSchema = z.object({
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
  _count: z.union([z.literal(true), DogCountAggregateInputObjectSchema]).optional(),
  _min: DogMinAggregateInputObjectSchema.optional(),
  _max: DogMaxAggregateInputObjectSchema.optional(),
  _avg: DogAvgAggregateInputObjectSchema.optional(),
  _sum: DogSumAggregateInputObjectSchema.optional()
});
