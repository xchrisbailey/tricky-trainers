import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickCreateWithoutTrickInputSchema } from './TrainingLogTrickCreateWithoutTrickInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTrickInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTrickInputSchema';
import { TrainingLogTrickCreateOrConnectWithoutTrickInputSchema } from './TrainingLogTrickCreateOrConnectWithoutTrickInputSchema';
import { TrainingLogTrickCreateManyTrickInputEnvelopeSchema } from './TrainingLogTrickCreateManyTrickInputEnvelopeSchema';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';

export const TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema: z.ZodType<Prisma.TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInput> = z.object({
  create: z.union([ z.lazy(() => TrainingLogTrickCreateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickCreateWithoutTrickInputSchema).array(),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTrickInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTrickInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrainingLogTrickCreateManyTrickInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema;
