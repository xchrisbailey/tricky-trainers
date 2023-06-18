import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const DogScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DogScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DogScalarWhereWithAggregatesInputSchema),z.lazy(() => DogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DogScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DogScalarWhereWithAggregatesInputSchema),z.lazy(() => DogScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  flare: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  breed: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  age_years: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  age_months: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  user_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default DogScalarWhereWithAggregatesInputSchema;
