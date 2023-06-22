import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z
  .object({
    equals: z.lazy(() => RoleSchema).optional(),
    in: z.union([z.lazy(() => RoleSchema).array(), z.lazy(() => RoleSchema)]).optional(),
    notIn: z.union([z.lazy(() => RoleSchema).array(), z.lazy(() => RoleSchema)]).optional(),
    not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterSchema)]).optional()
  })
  .strict();

export default NestedEnumRoleFilterSchema;
