import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TrickScalarWhereInputSchema: z.ZodType<Prisma.TrickScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrickScalarWhereInputSchema),
        z.lazy(() => TrickScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => TrickScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrickScalarWhereInputSchema),
        z.lazy(() => TrickScalarWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    example: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    difficulty: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    added_by: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    created_on: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
  })
  .strict();

export default TrickScalarWhereInputSchema;
