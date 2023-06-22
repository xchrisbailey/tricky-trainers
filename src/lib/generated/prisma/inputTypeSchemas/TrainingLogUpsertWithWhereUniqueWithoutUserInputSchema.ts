import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithoutUserInputSchema } from './TrainingLogUpdateWithoutUserInputSchema';
import { TrainingLogUncheckedUpdateWithoutUserInputSchema } from './TrainingLogUncheckedUpdateWithoutUserInputSchema';
import { TrainingLogCreateWithoutUserInputSchema } from './TrainingLogCreateWithoutUserInputSchema';
import { TrainingLogUncheckedCreateWithoutUserInputSchema } from './TrainingLogUncheckedCreateWithoutUserInputSchema';

export const TrainingLogUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TrainingLogUpdateWithoutUserInputSchema),
        z.lazy(() => TrainingLogUncheckedUpdateWithoutUserInputSchema)
      ]),
      create: z.union([
        z.lazy(() => TrainingLogCreateWithoutUserInputSchema),
        z.lazy(() => TrainingLogUncheckedCreateWithoutUserInputSchema)
      ])
    })
    .strict();

export default TrainingLogUpsertWithWhereUniqueWithoutUserInputSchema;
