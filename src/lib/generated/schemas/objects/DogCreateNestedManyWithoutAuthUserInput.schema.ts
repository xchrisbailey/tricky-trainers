import { z } from 'zod';
import { DogCreateWithoutAuthUserInputObjectSchema } from './DogCreateWithoutAuthUserInput.schema';
import { DogUncheckedCreateWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateWithoutAuthUserInput.schema';
import { DogCreateOrConnectWithoutAuthUserInputObjectSchema } from './DogCreateOrConnectWithoutAuthUserInput.schema';
import { DogCreateManyAuthUserInputEnvelopeObjectSchema } from './DogCreateManyAuthUserInputEnvelope.schema';
import { DogWhereUniqueInputObjectSchema } from './DogWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogCreateNestedManyWithoutAuthUserInput> = z
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
    createMany: z.lazy(() => DogCreateManyAuthUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => DogWhereUniqueInputObjectSchema),
        z.lazy(() => DogWhereUniqueInputObjectSchema).array()
      ])
      .optional()
  })
  .strict();

export const DogCreateNestedManyWithoutAuthUserInputObjectSchema = Schema;
