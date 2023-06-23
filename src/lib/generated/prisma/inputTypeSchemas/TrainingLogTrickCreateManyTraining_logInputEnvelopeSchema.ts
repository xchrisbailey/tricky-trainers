import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickCreateManyTraining_logInputSchema } from './TrainingLogTrickCreateManyTraining_logInputSchema';

export const TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema: z.ZodType<Prisma.TrainingLogTrickCreateManyTraining_logInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TrainingLogTrickCreateManyTraining_logInputSchema),z.lazy(() => TrainingLogTrickCreateManyTraining_logInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema;
