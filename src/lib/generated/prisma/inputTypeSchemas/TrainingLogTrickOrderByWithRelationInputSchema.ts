import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TrickOrderByWithRelationInputSchema } from './TrickOrderByWithRelationInputSchema';
import { TrainingLogOrderByWithRelationInputSchema } from './TrainingLogOrderByWithRelationInputSchema';

export const TrainingLogTrickOrderByWithRelationInputSchema: z.ZodType<Prisma.TrainingLogTrickOrderByWithRelationInput> = z.object({
  trick_id: z.lazy(() => SortOrderSchema).optional(),
  log_id: z.lazy(() => SortOrderSchema).optional(),
  understanding: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  trick: z.lazy(() => TrickOrderByWithRelationInputSchema).optional(),
  training_log: z.lazy(() => TrainingLogOrderByWithRelationInputSchema).optional()
}).strict();

export default TrainingLogTrickOrderByWithRelationInputSchema;
