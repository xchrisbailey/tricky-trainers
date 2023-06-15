import { z } from 'zod';
import { TrickCreateManyUserInputObjectSchema } from './TrickCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TrickCreateManyUserInputObjectSchema),
      z.lazy(() => TrickCreateManyUserInputObjectSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
  })
  .strict();

export const TrickCreateManyUserInputEnvelopeObjectSchema = Schema;
