import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickCreateWithoutTraining_logInputSchema } from './TrainingLogTrickCreateWithoutTraining_logInputSchema';
import { TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema';
import { TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema } from './TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema';
import { TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema } from './TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema';
import { TrainingLogTrickWhereUniqueInputSchema } from './TrainingLogTrickWhereUniqueInputSchema';

export const TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema: z.ZodType<Prisma.TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrainingLogTrickCreateWithoutTraining_logInputSchema),
          z.lazy(() => TrainingLogTrickCreateWithoutTraining_logInputSchema).array(),
          z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema),
          z.lazy(() => TrainingLogTrickUncheckedCreateWithoutTraining_logInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema),
          z.lazy(() => TrainingLogTrickCreateOrConnectWithoutTraining_logInputSchema).array()
        ])
        .optional(),
      createMany: z
        .lazy(() => TrainingLogTrickCreateManyTraining_logInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TrainingLogTrickWhereUniqueInputSchema),
          z.lazy(() => TrainingLogTrickWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema;
