import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateWithoutUserInputSchema } from './TrickCreateWithoutUserInputSchema';
import { TrickUncheckedCreateWithoutUserInputSchema } from './TrickUncheckedCreateWithoutUserInputSchema';
import { TrickCreateOrConnectWithoutUserInputSchema } from './TrickCreateOrConnectWithoutUserInputSchema';
import { TrickUpsertWithWhereUniqueWithoutUserInputSchema } from './TrickUpsertWithWhereUniqueWithoutUserInputSchema';
import { TrickCreateManyUserInputEnvelopeSchema } from './TrickCreateManyUserInputEnvelopeSchema';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';
import { TrickUpdateWithWhereUniqueWithoutUserInputSchema } from './TrickUpdateWithWhereUniqueWithoutUserInputSchema';
import { TrickUpdateManyWithWhereWithoutUserInputSchema } from './TrickUpdateManyWithWhereWithoutUserInputSchema';
import { TrickScalarWhereInputSchema } from './TrickScalarWhereInputSchema';

export const TrickUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TrickUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrickCreateWithoutUserInputSchema),
          z.lazy(() => TrickCreateWithoutUserInputSchema).array(),
          z.lazy(() => TrickUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => TrickUncheckedCreateWithoutUserInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TrickCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => TrickCreateOrConnectWithoutUserInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TrickUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => TrickUpsertWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => TrickCreateManyUserInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => TrickWhereUniqueInputSchema),
          z.lazy(() => TrickWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TrickWhereUniqueInputSchema),
          z.lazy(() => TrickWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TrickWhereUniqueInputSchema),
          z.lazy(() => TrickWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TrickWhereUniqueInputSchema),
          z.lazy(() => TrickWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TrickUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => TrickUpdateWithWhereUniqueWithoutUserInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TrickUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => TrickUpdateManyWithWhereWithoutUserInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TrickScalarWhereInputSchema),
          z.lazy(() => TrickScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default TrickUpdateManyWithoutUserNestedInputSchema;
