import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereInputSchema } from './TrainingLogTrickWhereInputSchema';

export const TrainingLogTrickListRelationFilterSchema: z.ZodType<Prisma.TrainingLogTrickListRelationFilter> =
  z
    .object({
      every: z.lazy(() => TrainingLogTrickWhereInputSchema).optional(),
      some: z.lazy(() => TrainingLogTrickWhereInputSchema).optional(),
      none: z.lazy(() => TrainingLogTrickWhereInputSchema).optional()
    })
    .strict();

export default TrainingLogTrickListRelationFilterSchema;
