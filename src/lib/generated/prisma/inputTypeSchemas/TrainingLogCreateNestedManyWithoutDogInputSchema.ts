import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateWithoutDogInputSchema } from './TrainingLogCreateWithoutDogInputSchema';
import { TrainingLogUncheckedCreateWithoutDogInputSchema } from './TrainingLogUncheckedCreateWithoutDogInputSchema';
import { TrainingLogCreateOrConnectWithoutDogInputSchema } from './TrainingLogCreateOrConnectWithoutDogInputSchema';
import { TrainingLogCreateManyDogInputEnvelopeSchema } from './TrainingLogCreateManyDogInputEnvelopeSchema';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';

export const TrainingLogCreateNestedManyWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogCreateNestedManyWithoutDogInput> = z.object({
  create: z.union([ z.lazy(() => TrainingLogCreateWithoutDogInputSchema),z.lazy(() => TrainingLogCreateWithoutDogInputSchema).array(),z.lazy(() => TrainingLogUncheckedCreateWithoutDogInputSchema),z.lazy(() => TrainingLogUncheckedCreateWithoutDogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrainingLogCreateOrConnectWithoutDogInputSchema),z.lazy(() => TrainingLogCreateOrConnectWithoutDogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrainingLogCreateManyDogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TrainingLogWhereUniqueInputSchema),z.lazy(() => TrainingLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TrainingLogCreateNestedManyWithoutDogInputSchema;
