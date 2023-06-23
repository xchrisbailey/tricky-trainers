import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickArgsSchema } from "../outputTypeSchemas/TrickArgsSchema"
import { TrainingLogArgsSchema } from "../outputTypeSchemas/TrainingLogArgsSchema"

export const TrainingLogTrickSelectSchema: z.ZodType<Prisma.TrainingLogTrickSelect> = z.object({
  trick_id: z.boolean().optional(),
  log_id: z.boolean().optional(),
  understanding: z.boolean().optional(),
  notes: z.boolean().optional(),
  train_date: z.boolean().optional(),
  trick: z.union([z.boolean(),z.lazy(() => TrickArgsSchema)]).optional(),
  training_log: z.union([z.boolean(),z.lazy(() => TrainingLogArgsSchema)]).optional(),
}).strict()

export default TrainingLogTrickSelectSchema;
