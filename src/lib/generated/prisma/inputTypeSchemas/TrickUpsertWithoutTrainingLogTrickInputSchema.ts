import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickUpdateWithoutTrainingLogTrickInputSchema } from './TrickUpdateWithoutTrainingLogTrickInputSchema';
import { TrickUncheckedUpdateWithoutTrainingLogTrickInputSchema } from './TrickUncheckedUpdateWithoutTrainingLogTrickInputSchema';
import { TrickCreateWithoutTrainingLogTrickInputSchema } from './TrickCreateWithoutTrainingLogTrickInputSchema';
import { TrickUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrickUncheckedCreateWithoutTrainingLogTrickInputSchema';

export const TrickUpsertWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrickUpsertWithoutTrainingLogTrickInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TrickUpdateWithoutTrainingLogTrickInputSchema),
        z.lazy(() => TrickUncheckedUpdateWithoutTrainingLogTrickInputSchema)
      ]),
      create: z.union([
        z.lazy(() => TrickCreateWithoutTrainingLogTrickInputSchema),
        z.lazy(() => TrickUncheckedCreateWithoutTrainingLogTrickInputSchema)
      ])
    })
    .strict();

export default TrickUpsertWithoutTrainingLogTrickInputSchema;
