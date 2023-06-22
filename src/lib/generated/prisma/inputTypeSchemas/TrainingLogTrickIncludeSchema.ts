import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickArgsSchema } from '../outputTypeSchemas/TrickArgsSchema';
import { TrainingLogArgsSchema } from '../outputTypeSchemas/TrainingLogArgsSchema';

export const TrainingLogTrickIncludeSchema: z.ZodType<Prisma.TrainingLogTrickInclude> = z
  .object({
    trick: z.union([z.boolean(), z.lazy(() => TrickArgsSchema)]).optional(),
    training_log: z.union([z.boolean(), z.lazy(() => TrainingLogArgsSchema)]).optional()
  })
  .strict();

export default TrainingLogTrickIncludeSchema;
