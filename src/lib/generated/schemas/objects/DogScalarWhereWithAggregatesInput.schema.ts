import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DogScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DogScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => DogScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DogScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DogScalarWhereWithAggregatesInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    flare: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    breed: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    age_years: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    age_months: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    user_id: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable()
  })
  .strict();

export const DogScalarWhereWithAggregatesInputObjectSchema = Schema;
