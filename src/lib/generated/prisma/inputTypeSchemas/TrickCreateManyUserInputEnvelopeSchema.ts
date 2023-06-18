import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateManyUserInputSchema } from './TrickCreateManyUserInputSchema';

export const TrickCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TrickCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TrickCreateManyUserInputSchema),z.lazy(() => TrickCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TrickCreateManyUserInputEnvelopeSchema;
