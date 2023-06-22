import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateWithoutUserInputSchema } from './DogCreateWithoutUserInputSchema';
import { DogUncheckedCreateWithoutUserInputSchema } from './DogUncheckedCreateWithoutUserInputSchema';
import { DogCreateOrConnectWithoutUserInputSchema } from './DogCreateOrConnectWithoutUserInputSchema';
import { DogUpsertWithWhereUniqueWithoutUserInputSchema } from './DogUpsertWithWhereUniqueWithoutUserInputSchema';
import { DogCreateManyUserInputEnvelopeSchema } from './DogCreateManyUserInputEnvelopeSchema';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithWhereUniqueWithoutUserInputSchema } from './DogUpdateWithWhereUniqueWithoutUserInputSchema';
import { DogUpdateManyWithWhereWithoutUserInputSchema } from './DogUpdateManyWithWhereWithoutUserInputSchema';
import { DogScalarWhereInputSchema } from './DogScalarWhereInputSchema';

export const DogUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.DogUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DogCreateWithoutUserInputSchema),
          z.lazy(() => DogCreateWithoutUserInputSchema).array(),
          z.lazy(() => DogUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => DogUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DogCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => DogCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => DogUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => DogUpsertWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => DogCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => DogWhereUniqueInputSchema),
          z.lazy(() => DogWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DogWhereUniqueInputSchema),
          z.lazy(() => DogWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DogWhereUniqueInputSchema),
          z.lazy(() => DogWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DogWhereUniqueInputSchema),
          z.lazy(() => DogWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => DogUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => DogUpdateWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => DogUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => DogUpdateManyWithWhereWithoutUserInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DogScalarWhereInputSchema),
          z.lazy(() => DogScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default DogUncheckedUpdateManyWithoutUserNestedInputSchema;
