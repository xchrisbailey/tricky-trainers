import { z } from 'zod';
import { TrickCreateWithoutUserInputObjectSchema } from './TrickCreateWithoutUserInput.schema';
import { TrickUncheckedCreateWithoutUserInputObjectSchema } from './TrickUncheckedCreateWithoutUserInput.schema';
import { TrickCreateOrConnectWithoutUserInputObjectSchema } from './TrickCreateOrConnectWithoutUserInput.schema';
import { TrickCreateManyUserInputEnvelopeObjectSchema } from './TrickCreateManyUserInputEnvelope.schema';
import { TrickWhereUniqueInputObjectSchema } from './TrickWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickCreateNestedManyWithoutUserInput> = z
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
    createMany: z.lazy(() => TrickCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => TrickWhereUniqueInputObjectSchema),
        z.lazy(() => TrickWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const TrickCreateNestedManyWithoutUserInputObjectSchema = Schema;
