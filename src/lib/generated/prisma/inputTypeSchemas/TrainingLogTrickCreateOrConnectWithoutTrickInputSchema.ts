import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickCreateWithoutTrickInputSchema } from './TrainingLogTrickCreateWithoutTrickInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTrickInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTrickInputSchema';

export const TrainingLogTrickCreateOrConnectWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickCreateOrConnectWithoutTrickInput> =
  z
    .object({
      where: z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TrainingLogTrickCreateWithoutTrickInputSchema),
        z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTrickInputSchema)
      ])
    })
    .strict();

export default TrainingLogTrickCreateOrConnectWithoutTrickInputSchema;
