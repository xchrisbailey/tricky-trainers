import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickSelectSchema } from '../inputTypeSchemas/TrainingLogTrickSelectSchema';
import { TrainingLogTrickIncludeSchema } from '../inputTypeSchemas/TrainingLogTrickIncludeSchema';

export const TrainingLogTrickArgsSchema: z.ZodType<Prisma.TrainingLogTrickArgs> = z
  .object({
    select: z.lazy(() => TrainingLogTrickSelectSchema).optional(),
    include: z.lazy(() => TrainingLogTrickIncludeSchema).optional()
  })
  .strict();

export default TrainingLogTrickArgsSchema;
