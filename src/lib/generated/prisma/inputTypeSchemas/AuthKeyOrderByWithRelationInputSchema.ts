import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthUserOrderByWithRelationInputSchema } from './AuthUserOrderByWithRelationInputSchema';

export const AuthKeyOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthKeyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hashed_password: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  primary_key: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  auth_user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional()
}).strict();

export default AuthKeyOrderByWithRelationInputSchema;
