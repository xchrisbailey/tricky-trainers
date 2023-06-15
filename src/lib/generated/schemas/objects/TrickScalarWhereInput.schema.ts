import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrickScalarWhereInputObjectSchema),
        z.lazy(() => TrickScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => TrickScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrickScalarWhereInputObjectSchema),
        z.lazy(() => TrickScalarWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    example: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    difficulty: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    added_by: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    created_on: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
  })
  .strict();

export const TrickScalarWhereInputObjectSchema = Schema;
