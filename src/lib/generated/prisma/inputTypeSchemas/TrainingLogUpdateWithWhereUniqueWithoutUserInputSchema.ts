import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithoutUserInputSchema } from './TrainingLogUpdateWithoutUserInputSchema';
import { TrainingLogUncheckedUpdateWithoutUserInputSchema } from './TrainingLogUncheckedUpdateWithoutUserInputSchema';

export const TrainingLogUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TrainingLogUpdateWithoutUserInputSchema),
        z.lazy(() => TrainingLogUncheckedUpdateWithoutUserInputSchema)
      ])
    })
    .strict();

export default TrainingLogUpdateWithWhereUniqueWithoutUserInputSchema;
