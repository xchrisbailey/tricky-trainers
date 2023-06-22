import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { AuthUserRelationFilterSchema } from './AuthUserRelationFilterSchema';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';

export const AuthSessionWhereInputSchema: z.ZodType<Prisma.AuthSessionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuthSessionWhereInputSchema),
        z.lazy(() => AuthSessionWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => AuthSessionWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuthSessionWhereInputSchema),
        z.lazy(() => AuthSessionWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    active_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    idle_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    auth_user: z
      .union([z.lazy(() => AuthUserRelationFilterSchema), z.lazy(() => AuthUserWhereInputSchema)])
      .optional()
  })
  .strict();

export default AuthSessionWhereInputSchema;
