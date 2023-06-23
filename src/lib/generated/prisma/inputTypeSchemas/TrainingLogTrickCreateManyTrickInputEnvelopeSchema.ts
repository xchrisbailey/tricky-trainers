import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickCreateManyTrickInputSchema } from './TrainingLogTrickCreateManyTrickInputSchema';

export const TrainingLogTrickCreateManyTrickInputEnvelopeSchema: z.ZodType<Prisma.TrainingLogTrickCreateManyTrickInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TrainingLogTrickCreateManyTrickInputSchema),z.lazy(() => TrainingLogTrickCreateManyTrickInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TrainingLogTrickCreateManyTrickInputEnvelopeSchema;
