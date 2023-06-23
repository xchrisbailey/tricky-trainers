import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickUpdateWithoutTraining_logInputSchema } from './TrainingLogTrickUpdateWithoutTraining_logInputSchema';
import { TrainingLogTrickUncheckedUpdateWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedUpdateWithoutTraining_logInputSchema';

export const TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInput> = z.object({
  where: z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TrainingLogTrickUpdateWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickUncheckedUpdateWithoutTraining_logInputSchema) ]),
}).strict();

export default TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInputSchema;
