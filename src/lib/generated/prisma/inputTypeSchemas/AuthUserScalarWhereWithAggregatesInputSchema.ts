import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema';
import { RoleSchema } from './RoleSchema';

export const AuthUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthUserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => AuthUserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AuthUserScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      first_name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      last_name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
      role: z
        .union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)])
        .optional()
    })
    .strict();

export default AuthUserScalarWhereWithAggregatesInputSchema;
