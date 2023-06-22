import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { BigIntNullableWithAggregatesFilterSchema } from './BigIntNullableWithAggregatesFilterSchema';

export const AuthKeyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthKeyScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AuthKeyScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      hashed_password: z
        .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
        .optional()
        .nullable(),
      user_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      primary_key: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
      expires: z
        .union([z.lazy(() => BigIntNullableWithAggregatesFilterSchema), z.bigint()])
        .optional()
        .nullable()
    })
    .strict();

export default AuthKeyScalarWhereWithAggregatesInputSchema;
