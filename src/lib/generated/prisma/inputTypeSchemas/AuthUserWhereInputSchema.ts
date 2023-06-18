import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { AuthSessionListRelationFilterSchema } from './AuthSessionListRelationFilterSchema';
import { AuthKeyListRelationFilterSchema } from './AuthKeyListRelationFilterSchema';
import { DogListRelationFilterSchema } from './DogListRelationFilterSchema';
import { TrickListRelationFilterSchema } from './TrickListRelationFilterSchema';

export const AuthUserWhereInputSchema: z.ZodType<Prisma.AuthUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthUserWhereInputSchema),z.lazy(() => AuthUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthUserWhereInputSchema),z.lazy(() => AuthUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  auth_session: z.lazy(() => AuthSessionListRelationFilterSchema).optional(),
  auth_key: z.lazy(() => AuthKeyListRelationFilterSchema).optional(),
  dogs: z.lazy(() => DogListRelationFilterSchema).optional(),
  tricks: z.lazy(() => TrickListRelationFilterSchema).optional()
}).strict();

export default AuthUserWhereInputSchema;
