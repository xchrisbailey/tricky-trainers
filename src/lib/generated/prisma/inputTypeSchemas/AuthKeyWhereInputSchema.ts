import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { BigIntNullableFilterSchema } from './BigIntNullableFilterSchema';
import { AuthUserRelationFilterSchema } from './AuthUserRelationFilterSchema';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';

export const AuthKeyWhereInputSchema: z.ZodType<Prisma.AuthKeyWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => AuthKeyWhereInputSchema), z.lazy(() => AuthKeyWhereInputSchema).array()])
      .optional(),
    OR: z
      .lazy(() => AuthKeyWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => AuthKeyWhereInputSchema), z.lazy(() => AuthKeyWhereInputSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    hashed_password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    primary_key: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
    expires: z
      .union([z.lazy(() => BigIntNullableFilterSchema), z.bigint()])
      .optional()
      .nullable(),
    auth_user: z
      .union([z.lazy(() => AuthUserRelationFilterSchema), z.lazy(() => AuthUserWhereInputSchema)])
      .optional()
  })
  .strict();

export default AuthKeyWhereInputSchema;
