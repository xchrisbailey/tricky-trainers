import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateWithoutUserInputSchema } from './DogCreateWithoutUserInputSchema';
import { DogUncheckedCreateWithoutUserInputSchema } from './DogUncheckedCreateWithoutUserInputSchema';
import { DogCreateOrConnectWithoutUserInputSchema } from './DogCreateOrConnectWithoutUserInputSchema';
import { DogCreateManyUserInputEnvelopeSchema } from './DogCreateManyUserInputEnvelopeSchema';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';

export const DogUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.DogUncheckedCreateNestedManyWithoutUserInput> =
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
      createMany: z.lazy(() => DogCreateManyUserInputEnvelopeSchema).optional(),
      connect: z
        .union([
          z.lazy(() => DogWhereUniqueInputSchema),
          z.lazy(() => DogWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default DogUncheckedCreateNestedManyWithoutUserInputSchema;
