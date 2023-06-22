import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateManyUserInputSchema } from './DogCreateManyUserInputSchema';

export const DogCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.DogCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => DogCreateManyUserInputSchema),
        z.lazy(() => DogCreateManyUserInputSchema).array()
      ]),
      skipDuplicates: z.boolean().optional()
    })
    .strict();

export default DogCreateManyUserInputEnvelopeSchema;
