import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AuthUserRelationFilterSchema } from './AuthUserRelationFilterSchema';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';
import { TrainingLogTrickListRelationFilterSchema } from './TrainingLogTrickListRelationFilterSchema';

export const TrickWhereInputSchema: z.ZodType<Prisma.TrickWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => TrickWhereInputSchema), z.lazy(() => TrickWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => TrickWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => TrickWhereInputSchema), z.lazy(() => TrickWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    example: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    difficulty: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    added_by: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    created_on: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    User: z
      .union([z.lazy(() => AuthUserRelationFilterSchema), z.lazy(() => AuthUserWhereInputSchema)])
      .optional()
      .nullable(),
    TrainingLogTrick: z.lazy(() => TrainingLogTrickListRelationFilterSchema).optional()
  })
  .strict();

export default TrickWhereInputSchema;
