import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogCreateWithoutTrainingLogTrickInputSchema';
import { TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema';

export const TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrainingLogCreateOrConnectWithoutTrainingLogTrickInput> = z.object({
  where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TrainingLogCreateWithoutTrainingLogTrickInputSchema),z.lazy(() => TrainingLogUncheckedCreateWithoutTrainingLogTrickInputSchema) ]),
}).strict();

export default TrainingLogCreateOrConnectWithoutTrainingLogTrickInputSchema;
