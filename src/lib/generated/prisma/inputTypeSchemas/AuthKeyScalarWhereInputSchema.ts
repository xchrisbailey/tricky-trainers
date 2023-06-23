import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { BigIntNullableFilterSchema } from './BigIntNullableFilterSchema';

export const AuthKeyScalarWhereInputSchema: z.ZodType<Prisma.AuthKeyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthKeyScalarWhereInputSchema),z.lazy(() => AuthKeyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthKeyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthKeyScalarWhereInputSchema),z.lazy(() => AuthKeyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hashed_password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  primary_key: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  expires: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
}).strict();

export default AuthKeyScalarWhereInputSchema;
