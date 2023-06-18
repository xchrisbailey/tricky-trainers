import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BigIntWithAggregatesFilterSchema } from './BigIntWithAggregatesFilterSchema';

export const AuthSessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthSessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthSessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  active_expires: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  idle_expires: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
}).strict();

export default AuthSessionScalarWhereWithAggregatesInputSchema;
