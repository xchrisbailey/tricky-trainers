import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { AuthUserRelationFilterObjectSchema } from './AuthUserRelationFilter.schema';
import { AuthUserWhereInputObjectSchema } from './AuthUserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DogWhereInputObjectSchema),
        z.lazy(() => DogWhereInputObjectSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => DogWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DogWhereInputObjectSchema),
        z.lazy(() => DogWhereInputObjectSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    flare: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    breed: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    age_years: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    age_months: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    user_id: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    AuthUser: z
      .union([
        z.lazy(() => AuthUserRelationFilterObjectSchema),
        z.lazy(() => AuthUserWhereInputObjectSchema)
      ])
      .optional()
      .nullable()
  })
  .strict();

export const DogWhereInputObjectSchema = Schema;
