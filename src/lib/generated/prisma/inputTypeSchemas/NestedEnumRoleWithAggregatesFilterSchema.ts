import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRoleFilterSchema } from './NestedEnumRoleFilterSchema';

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.union([ z.lazy(() => RoleSchema).array(),z.lazy(() => RoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => RoleSchema).array(),z.lazy(() => RoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export default NestedEnumRoleWithAggregatesFilterSchema;
