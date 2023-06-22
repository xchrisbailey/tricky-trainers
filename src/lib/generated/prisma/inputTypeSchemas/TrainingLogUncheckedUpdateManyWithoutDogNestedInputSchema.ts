import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateWithoutDogInputSchema } from './TrainingLogCreateWithoutDogInputSchema';
import { TrainingLogUncheckedCreateWithoutDogInputSchema } from './TrainingLogUncheckedCreateWithoutDogInputSchema';
import { TrainingLogCreateOrConnectWithoutDogInputSchema } from './TrainingLogCreateOrConnectWithoutDogInputSchema';
import { TrainingLogUpsertWithWhereUniqueWithoutDogInputSchema } from './TrainingLogUpsertWithWhereUniqueWithoutDogInputSchema';
import { TrainingLogCreateManyDogInputEnvelopeSchema } from './TrainingLogCreateManyDogInputEnvelopeSchema';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogUpdateWithWhereUniqueWithoutDogInputSchema } from './TrainingLogUpdateWithWhereUniqueWithoutDogInputSchema';
import { TrainingLogUpdateManyWithWhereWithoutDogInputSchema } from './TrainingLogUpdateManyWithWhereWithoutDogInputSchema';
import { TrainingLogScalarWhereInputSchema } from './TrainingLogScalarWhereInputSchema';

export const TrainingLogUncheckedUpdateManyWithoutDogNestedInputSchema: z.ZodType<Prisma.TrainingLogUncheckedUpdateManyWithoutDogNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrainingLogCreateWithoutDogInputSchema),
          z.lazy(() => TrainingLogCreateWithoutDogInputSchema).array(),
          z.lazy(() => TrainingLogUncheckedCreateWithoutDogInputSchema),
          z.lazy(() => TrainingLogUncheckedCreateWithoutDogInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TrainingLogCreateOrConnectWithoutDogInputSchema),
          z.lazy(() => TrainingLogCreateOrConnectWithoutDogInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TrainingLogUpsertWithWhereUniqueWithoutDogInputSchema),
          z.lazy(() => TrainingLogUpsertWithWhereUniqueWithoutDogInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => TrainingLogCreateManyDogInputEnvelopeSchema).optional(),
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
          z.lazy(() => TrainingLogUpdateWithWhereUniqueWithoutDogInputSchema),
          z.lazy(() => TrainingLogUpdateWithWhereUniqueWithoutDogInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TrainingLogUpdateManyWithWhereWithoutDogInputSchema),
          z.lazy(() => TrainingLogUpdateManyWithWhereWithoutDogInputSchema).array()
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

export default TrainingLogUncheckedUpdateManyWithoutDogNestedInputSchema;
