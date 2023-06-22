import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogSelectSchema } from '../inputTypeSchemas/TrainingLogSelectSchema';
import { TrainingLogIncludeSchema } from '../inputTypeSchemas/TrainingLogIncludeSchema';

export const TrainingLogArgsSchema: z.ZodType<Prisma.TrainingLogArgs> = z
  .object({
    select: z.lazy(() => TrainingLogSelectSchema).optional(),
    include: z.lazy(() => TrainingLogIncludeSchema).optional()
  })
  .strict();

export default TrainingLogArgsSchema;
