import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { NestedEnumRoleWithAggregatesFilterSchema } from './NestedEnumRoleWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRoleFilterSchema } from './NestedEnumRoleFilterSchema';

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.union([ z.lazy(() => RoleSchema).array(),z.lazy(() => RoleSchema) ]).optional(),
  notIn: z.union([ z.lazy(() => RoleSchema).array(),z.lazy(() => RoleSchema) ]).optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export default EnumRoleWithAggregatesFilterSchema;
