import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickCreateWithoutTraining_logInputSchema } from './TrainingLogTrickCreateWithoutTraining_logInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema';

export const TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateOrConnectWithoutTraining_logInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TrainingLogTrickCreateWithoutTraining_logInputSchema),
        z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema)
      ])
    })
    .strict();

export default TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema;
