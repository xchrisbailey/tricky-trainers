import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthUserOrderByWithRelationInputSchema } from './AuthUserOrderByWithRelationInputSchema';

export const DogOrderByWithRelationInputSchema: z.ZodType<Prisma.DogOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  flare: z.lazy(() => SortOrderSchema).optional(),
  breed: z.lazy(() => SortOrderSchema).optional(),
  age_years: z.lazy(() => SortOrderSchema).optional(),
  age_months: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  AuthUser: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional()
}).strict();

export default DogOrderByWithRelationInputSchema;
