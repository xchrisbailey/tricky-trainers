import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickCreateWithoutTraining_logInputSchema } from './TrainingLogTrickCreateWithoutTraining_logInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema';
import { TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema } from './TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema';
import { TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInputSchema } from './TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInputSchema';
import { TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema } from './TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';
import { TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInputSchema } from './TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInputSchema';
import { TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInputSchema } from './TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInputSchema';
import { TrainingLogTrickScalarWhereInputSchema } from './TrainingLogTrickScalarWhereInputSchema';

export const TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema: z.ZodType<Prisma.TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInput> = z.object({
  create: z.union([ z.lazy(() => TrainingLogTrickCreateWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickCreateWithoutTraining_logInputSchema).array(),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickUpsertWithWhereUniqueWithoutTraining_logInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickUpdateWithWhereUniqueWithoutTraining_logInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInputSchema),z.lazy(() => TrainingLogTrickUpdateManyWithWhereWithoutTraining_logInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TrainingLogTrickScalarWhereInputSchema),z.lazy(() => TrainingLogTrickScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TrainingLogTrickUncheckedUpdateManyWithoutTraining_logNestedInputSchema;
