import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateManyAuthUserInputSchema } from './DogCreateManyAuthUserInputSchema';

export const DogCreateManyAuthUserInputEnvelopeSchema: z.ZodType<Prisma.DogCreateManyAuthUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DogCreateManyAuthUserInputSchema),z.lazy(() => DogCreateManyAuthUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DogCreateManyAuthUserInputEnvelopeSchema;
