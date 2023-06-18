import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickCreateWithoutTrickInputSchema } from './TrainingLogTrickCreateWithoutTrickInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTrickInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTrickInputSchema';
import { TrainingLogTrickCreateOrConnectWithoutTrickInputSchema } from './TrainingLogTrickCreateOrConnectWithoutTrickInputSchema';
import { TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInputSchema } from './TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInputSchema';
import { TrainingLogTrickCreateManyTrickInputEnvelopeSchema } from './TrainingLogTrickCreateManyTrickInputEnvelopeSchema';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInputSchema } from './TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInputSchema';
import { TrainingLogTrickUpdateManyWithWhereWithoutTrickInputSchema } from './TrainingLogTrickUpdateManyWithWhereWithoutTrickInputSchema';
import { TrainingLogTrickScalarWhereInputSchema } from './TrainingLogTrickScalarWhereInputSchema';

export const TrainingLogTrickUpdateManyWithoutTrickNestedInputSchema: z.ZodType<Prisma.TrainingLogTrickUpdateManyWithoutTrickNestedInput> = z.object({
  create: z.union([ z.lazy(() => TrainingLogTrickCreateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickCreateWithoutTrickInputSchema).array(),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTrickInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTrickInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUpsertWithWhereUniqueWithoutTrickInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrainingLogTrickCreateManyTrickInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUpdateWithWhereUniqueWithoutTrickInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TrainingLogTrickUpdateManyWithWhereWithoutTrickInputSchema),z.lazy(() => TrainingLogTrickUpdateManyWithWhereWithoutTrickInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TrainingLogTrickScalarWhereInputSchema),z.lazy(() => TrainingLogTrickScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TrainingLogTrickUpdateManyWithoutTrickNestedInputSchema;
