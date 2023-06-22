import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthUserOrderByWithRelationInputSchema } from './AuthUserOrderByWithRelationInputSchema';

export const AuthSessionOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthSessionOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      active_expires: z.lazy(() => SortOrderSchema).optional(),
      idle_expires: z.lazy(() => SortOrderSchema).optional(),
      auth_user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional()
    })
    .strict();

export default AuthSessionOrderByWithRelationInputSchema;
