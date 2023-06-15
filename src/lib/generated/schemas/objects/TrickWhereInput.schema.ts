import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AuthUserRelationFilterObjectSchema } from './AuthUserRelationFilter.schema';
import { AuthUserWhereInputObjectSchema } from './AuthUserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TrickWhereInputObjectSchema),
        z.lazy(() => TrickWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => TrickWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TrickWhereInputObjectSchema),
        z.lazy(() => TrickWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    example: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    difficulty: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    added_by: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    created_on: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    User: z
      .union([
        z.lazy(() => AuthUserRelationFilterObjectSchema),
        z.lazy(() => AuthUserWhereInputObjectSchema)
      ])
      .optional()
      .nullable()
  })
  .strict();

export const TrickWhereInputObjectSchema = Schema;
