import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickUpdateWithoutTrickInputSchema } from './TrainingLogTrickUpdateWithoutTrickInputSchema';
import { TrainingLogTrickUncheckedUpdateWithoutTrickInputSchema } from './TrainingLogTrickUncheckedUpdateWithoutTrickInputSchema';
import { TrainingLogTrickCreateWithoutTrickInputSchema } from './TrainingLogTrickCreateWithoutTrickInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTrickInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTrickInputSchema';

export const TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInput> = z.object({
  where: z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TrainingLogTrickUpdateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUncheckedUpdateWithoutTrickInputSchema) ]),
  create: z.union([ z.lazy(() => TrainingLogTrickCreateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTrickInputSchema) ]),
}).strict();

export default TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInputSchema;
