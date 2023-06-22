import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateManyUserInputSchema } from './TrainingLogCreateManyUserInputSchema';

export const TrainingLogCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TrainingLogCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TrainingLogCreateManyUserInputSchema),
        z.lazy(() => TrainingLogCreateManyUserInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export default TrainingLogCreateManyUserInputEnvelopeSchema;
