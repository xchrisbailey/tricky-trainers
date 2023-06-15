import { z } from 'zod';
import { TrickCreateWithoutUserInputObjectSchema } from './TrickCreateWithoutUserInput.schema';
import { TrickUncheckedCreateWithoutUserInputObjectSchema } from './TrickUncheckedCreateWithoutUserInput.schema';
import { TrickCreateOrConnectWithoutUserInputObjectSchema } from './TrickCreateOrConnectWithoutUserInput.schema';
import { TrickUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TrickUpsertWithWhereUniqueWithoutUserInput.schema';
import { TrickCreateManyUserInputEnvelopeObjectSchema } from './TrickCreateManyUserInputEnvelope.schema';
import { TrickWhereUniqueInputObjectSchema } from './TrickWhereUniqueInput.schema';
import { TrickUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TrickUpdateWithWhereUniqueWithoutUserInput.schema';
import { TrickUpdateManyWithWhereWithoutUserInputObjectSchema } from './TrickUpdateManyWithWhereWithoutUserInput.schema';
import { TrickScalarWhereInputObjectSchema } from './TrickScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TrickCreateWithoutUserInputObjectSchema),
        z.lazy(() => TrickCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => TrickUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => TrickUncheckedCreateWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TrickCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => TrickCreateOrConnectWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TrickUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => TrickUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    createMany: z.lazy(() => TrickCreateManyUserInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => TrickWhereUniqueInputObjectSchema),
        z.lazy(() => TrickWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TrickWhereUniqueInputObjectSchema),
        z.lazy(() => TrickWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TrickWhereUniqueInputObjectSchema),
        z.lazy(() => TrickWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TrickWhereUniqueInputObjectSchema),
        z.lazy(() => TrickWhereUniqueInputObjectSchema).array()
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TrickUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => TrickUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TrickUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => TrickUpdateManyWithWhereWithoutUserInputObjectSchema).array()
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TrickScalarWhereInputObjectSchema),
        z.lazy(() => TrickScalarWhereInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const TrickUpdateManyWithoutUserNestedInputObjectSchema = Schema;
