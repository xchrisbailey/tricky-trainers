import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickUpdateWithoutTraining_logInputSchema } from './TrainingLogTrickUpdateWithoutTraining_logInputSchema';
import { TrainingLogTrickUncheckedUpdateWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedUpdateWithoutTraining_logInputSchema';
import { TrainingLogTrickCreateWithoutTraining_logInputSchema } from './TrainingLogTrickCreateWithoutTraining_logInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema';

export const TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => TrainingLogTrickUpdateWithoutTraining_logInputSchema),
        z.lazy(() => TrainingLogTrickUncheckedUpdateWithoutTraining_logInputSchema)
      ]),
      create: z.union([
        z.lazy(() => TrainingLogTrickCreateWithoutTraining_logInputSchema),
        z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema)
      ])
    })
    .strict();

export default TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInputSchema;
