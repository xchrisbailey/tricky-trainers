import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthUserOrderByWithRelationInputSchema } from './AuthUserOrderByWithRelationInputSchema';
import { TrainingLogTrickOrderByRelationAggregateInputSchema } from './TrainingLogTrickOrderByRelationAggregateInputSchema';

export const TrickOrderByWithRelationInputSchema: z.ZodType<Prisma.TrickOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  example: z.lazy(() => SortOrderSchema).optional(),
  difficulty: z.lazy(() => SortOrderSchema).optional(),
  added_by: z.lazy(() => SortOrderSchema).optional(),
  created_on: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TrickOrderByWithRelationInputSchema;
