import { z } from 'zod';
import { DogCreateWithoutAuthUserInputObjectSchema } from './DogCreateWithoutAuthUserInput.schema';
import { DogUncheckedCreateWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateWithoutAuthUserInput.schema';
import { DogCreateOrConnectWithoutAuthUserInputObjectSchema } from './DogCreateOrConnectWithoutAuthUserInput.schema';
import { DogUpsertWithWhereUniqueWithoutAuthUserInputObjectSchema } from './DogUpsertWithWhereUniqueWithoutAuthUserInput.schema';
import { DogCreateManyAuthUserInputEnvelopeObjectSchema } from './DogCreateManyAuthUserInputEnvelope.schema';
import { DogWhereUniqueInputObjectSchema } from './DogWhereUniqueInput.schema';
import { DogUpdateWithWhereUniqueWithoutAuthUserInputObjectSchema } from './DogUpdateWithWhereUniqueWithoutAuthUserInput.schema';
import { DogUpdateManyWithWhereWithoutAuthUserInputObjectSchema } from './DogUpdateManyWithWhereWithoutAuthUserInput.schema';
import { DogScalarWhereInputObjectSchema } from './DogScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogUncheckedUpdateManyWithoutAuthUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DogCreateWithoutAuthUserInputObjectSchema),
        z.lazy(() => DogCreateWithoutAuthUserInputObjectSchema).array(),
        z.lazy(() => DogUncheckedCreateWithoutAuthUserInputObjectSchema),
        z.lazy(() => DogUncheckedCreateWithoutAuthUserInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DogCreateOrConnectWithoutAuthUserInputObjectSchema),
        z.lazy(() => DogCreateOrConnectWithoutAuthUserInputObjectSchema).array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DogUpsertWithWhereUniqueWithoutAuthUserInputObjectSchema),
        z.lazy(() => DogUpsertWithWhereUniqueWithoutAuthUserInputObjectSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => DogCreateManyAuthUserInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => DogWhereUniqueInputObjectSchema),
        z.lazy(() => DogWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DogWhereUniqueInputObjectSchema),
        z.lazy(() => DogWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DogWhereUniqueInputObjectSchema),
        z.lazy(() => DogWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DogWhereUniqueInputObjectSchema),
        z.lazy(() => DogWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => DogUpdateWithWhereUniqueWithoutAuthUserInputObjectSchema),
        z.lazy(() => DogUpdateWithWhereUniqueWithoutAuthUserInputObjectSchema).array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DogUpdateManyWithWhereWithoutAuthUserInputObjectSchema),
        z.lazy(() => DogUpdateManyWithWhereWithoutAuthUserInputObjectSchema).array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DogScalarWhereInputObjectSchema),
        z.lazy(() => DogScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const DogUncheckedUpdateManyWithoutAuthUserNestedInputObjectSchema = Schema;
