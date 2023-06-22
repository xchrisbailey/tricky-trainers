import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AuthUserOrderByWithRelationInputSchema } from './AuthUserOrderByWithRelationInputSchema';

export const AuthKeyOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthKeyOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      hashed_password: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      primary_key: z.lazy(() => SortOrderSchema).optional(),
      expires: z
        .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
        .optional(),
      auth_user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional()
    })
    .strict();

export default AuthKeyOrderByWithRelationInputSchema;
