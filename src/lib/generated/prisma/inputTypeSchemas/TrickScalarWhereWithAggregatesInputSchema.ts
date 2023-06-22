import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TrickScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TrickScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TrickScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TrickScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => TrickScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TrickScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TrickScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      description: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      example: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      difficulty: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
      added_by: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      created_on: z
        .union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()])
        .optional()
    })
    .strict();

export default TrickScalarWhereWithAggregatesInputSchema;
