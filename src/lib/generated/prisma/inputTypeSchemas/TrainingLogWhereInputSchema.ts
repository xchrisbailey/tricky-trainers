import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DogRelationFilterSchema } from './DogRelationFilterSchema';
import { DogWhereInputSchema } from './DogWhereInputSchema';
import { AuthUserRelationFilterSchema } from './AuthUserRelationFilterSchema';
import { AuthUserWhereInputSchema } from './AuthUserWhereInputSchema';
import { TrainingLogTrickListRelationFilterSchema } from './TrainingLogTrickListRelationFilterSchema';

export const TrainingLogWhereInputSchema: z.ZodType<Prisma.TrainingLogWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TrainingLogWhereInputSchema),z.lazy(() => TrainingLogWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrainingLogWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrainingLogWhereInputSchema),z.lazy(() => TrainingLogWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dog_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dog: z.union([ z.lazy(() => DogRelationFilterSchema),z.lazy(() => DogWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => AuthUserRelationFilterSchema),z.lazy(() => AuthUserWhereInputSchema) ]).optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickListRelationFilterSchema).optional()
}).strict();

export default TrainingLogWhereInputSchema;
