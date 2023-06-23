import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickUpdateWithoutTrickInputSchema } from './TrainingLogTrickUpdateWithoutTrickInputSchema';
import { TrainingLogTrickUncheckedUpdateWithoutTrickInputSchema } from './TrainingLogTrickUncheckedUpdateWithoutTrickInputSchema';

export const TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInput> = z.object({
  where: z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TrainingLogTrickUpdateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUncheckedUpdateWithoutTrickInputSchema) ]),
}).strict();

export default TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInputSchema;
