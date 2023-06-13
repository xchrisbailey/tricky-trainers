import { z } from 'zod';
import { DogCreateManyAuthUserInputObjectSchema } from './DogCreateManyAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogCreateManyAuthUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => DogCreateManyAuthUserInputObjectSchema),
      z.lazy(() => DogCreateManyAuthUserInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const DogCreateManyAuthUserInputEnvelopeObjectSchema = Schema;
