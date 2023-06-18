import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DogOrderByWithRelationInputSchema } from './DogOrderByWithRelationInputSchema';
import { AuthUserOrderByWithRelationInputSchema } from './AuthUserOrderByWithRelationInputSchema';
import { TrainingLogTrickOrderByRelationAggregateInputSchema } from './TrainingLogTrickOrderByRelationAggregateInputSchema';

export const TrainingLogOrderByWithRelationInputSchema: z.ZodType<Prisma.TrainingLogOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dog_id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  dog: z.lazy(() => DogOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => AuthUserOrderByWithRelationInputSchema).optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TrainingLogOrderByWithRelationInputSchema;
