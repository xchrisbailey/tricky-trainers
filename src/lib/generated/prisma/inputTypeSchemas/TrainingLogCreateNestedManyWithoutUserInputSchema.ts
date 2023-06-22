import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateWithoutUserInputSchema } from './TrainingLogCreateWithoutUserInputSchema';
import { TrainingLogUncheckedCreateWithoutUserInputSchema } from './TrainingLogUncheckedCreateWithoutUserInputSchema';
import { TrainingLogCreateOrConnectWithoutUserInputSchema } from './TrainingLogCreateOrConnectWithoutUserInputSchema';
import { TrainingLogCreateManyUserInputEnvelopeSchema } from './TrainingLogCreateManyUserInputEnvelopeSchema';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';

export const TrainingLogCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrainingLogCreateWithoutUserInputSchema),
          z.lazy(() => TrainingLogCreateWithoutUserInputSchema).array(),
          z.lazy(() => TrainingLogUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => TrainingLogUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TrainingLogCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => TrainingLogCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => TrainingLogCreateManyUserInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => TrainingLogWhereUniqueInputSchema),
          z.lazy(() => TrainingLogWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default TrainingLogCreateNestedManyWithoutUserInputSchema;
