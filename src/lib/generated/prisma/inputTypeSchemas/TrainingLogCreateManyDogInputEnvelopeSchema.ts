import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateManyDogInputSchema } from './TrainingLogCreateManyDogInputSchema';

export const TrainingLogCreateManyDogInputEnvelopeSchema: z.ZodType<Prisma.TrainingLogCreateManyDogInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TrainingLogCreateManyDogInputSchema),
        z.lazy(() => TrainingLogCreateManyDogInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export default TrainingLogCreateManyDogInputEnvelopeSchema;
