import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { AuthUserRelationFilterSchema } from './AuthUserRelationFilterSchema';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';
import { TrainingLogListRelationFilterSchema } from './TrainingLogListRelationFilterSchema';

export const DogWhereInputSchema: z.ZodType<Prisma.DogWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => DogWhereInputSchema), z.lazy(() => DogWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => DogWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => DogWhereInputSchema), z.lazy(() => DogWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    flare: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    breed: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    age_years: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    age_months: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    user_id: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    User: z
      .union([z.lazy(() => AuthUserRelationFilterSchema), z.lazy(() => AuthUserWhereInputSchema)])
      .optional()
      .nullable(),
    TrainingLog: z.lazy(() => TrainingLogListRelationFilterSchema).optional()
  })
  .strict();

export default DogWhereInputSchema;
