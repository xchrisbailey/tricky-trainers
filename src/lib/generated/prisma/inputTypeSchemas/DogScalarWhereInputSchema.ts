import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const DogScalarWhereInputSchema: z.ZodType<Prisma.DogScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DogScalarWhereInputSchema),
        z.lazy(() => DogScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => DogScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DogScalarWhereInputSchema),
        z.lazy(() => DogScalarWhereInputSchema).array()
      ])
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
      .nullable()
  })
  .strict();

export default DogScalarWhereInputSchema;
