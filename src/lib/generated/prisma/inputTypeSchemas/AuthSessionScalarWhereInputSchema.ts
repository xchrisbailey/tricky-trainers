import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';

export const AuthSessionScalarWhereInputSchema: z.ZodType<Prisma.AuthSessionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuthSessionScalarWhereInputSchema),
        z.lazy(() => AuthSessionScalarWhereInputSchema).array()
      ])
      .optional(),
    OR: z
      .lazy(() => AuthSessionScalarWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuthSessionScalarWhereInputSchema),
        z.lazy(() => AuthSessionScalarWhereInputSchema).array()
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    active_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
    idle_expires: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional()
  })
  .strict();

export default AuthSessionScalarWhereInputSchema;
