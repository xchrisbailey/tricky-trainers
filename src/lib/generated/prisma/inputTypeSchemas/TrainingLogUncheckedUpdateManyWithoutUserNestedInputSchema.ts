import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateWithoutUserInputSchema } from './TrainingLogCreateWithoutUserInputSchema';
import { TrainingLogUncheckedCreateWithoutUserInputSchema } from './TrainingLogUncheckedCreateWithoutUserInputSchema';
import { TrainingLogCreateOrConnectWithoutUserInputSchema } from './TrainingLogCreateOrConnectWithoutUserInputSchema';
import { TrainingLogUpsertWithWhereUniqueWithoutUserInputSchema } from './TrainingLogUpsertWithWhereUniqueWithoutUserInputSchema';
import { TrainingLogCreateManyUserInputEnvelopeSchema } from './TrainingLogCreateManyUserInputEnvelopeSchema';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithWhereUniqueWithoutUserInputSchema } from './TrainingLogUpdateWithWhereUniqueWithoutUserInputSchema';
import { TrainingLogUpdateManyWithWhereWithoutUserInputSchema } from './TrainingLogUpdateManyWithWhereWithoutUserInputSchema';
import { TrainingLogScalarWhereInputSchema } from './TrainingLogScalarWhereInputSchema';

export const TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TrainingLogUncheckedUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(() => TrainingLogUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => TrainingLogUpsertWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => TrainingLogCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => TrainingLogWhereUniqueInputSchema),
          z.lazy(() => TrainingLogWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TrainingLogWhereUniqueInputSchema),
          z.lazy(() => TrainingLogWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TrainingLogWhereUniqueInputSchema),
          z.lazy(() => TrainingLogWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TrainingLogWhereUniqueInputSchema),
          z.lazy(() => TrainingLogWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TrainingLogUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => TrainingLogUpdateWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TrainingLogUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => TrainingLogUpdateManyWithWhereWithoutUserInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TrainingLogScalarWhereInputSchema),
          z.lazy(() => TrainingLogScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema;
