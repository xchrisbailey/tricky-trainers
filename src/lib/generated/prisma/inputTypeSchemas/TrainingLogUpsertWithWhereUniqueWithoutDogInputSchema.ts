import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithoutDogInputSchema } from './TrainingLogUpdateWithoutDogInputSchema';
import { TrainingLogUncheckedUpdateWithoutDogInputSchema } from './TrainingLogUncheckedUpdateWithoutDogInputSchema';
import { TrainingLogCreateWithoutDogInputSchema } from './TrainingLogCreateWithoutDogInputSchema';
import { TrainingLogUncheckedCreateWithoutDogInputSchema } from './TrainingLogUncheckedCreateWithoutDogInputSchema';

export const TrainingLogUpsertWithWhereUniqueWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogUpsertWithWhereUniqueWithoutDogInput> = z.object({
  where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TrainingLogUpdateWithoutDogInputSchema),z.lazy(() => TrainingLogUncheckedUpdateWithoutDogInputSchema) ]),
  create: z.union([ z.lazy(() => TrainingLogCreateWithoutDogInputSchema),z.lazy(() => TrainingLogUncheckedCreateWithoutDogInputSchema) ]),
}).strict();

export default TrainingLogUpsertWithWhereUniqueWithoutDogInputSchema;
