import { z } from 'zod';
import { DogWhereUniqueInputObjectSchema } from './DogWhereUniqueInput.schema';
import { DogCreateWithoutAuthUserInputObjectSchema } from './DogCreateWithoutAuthUserInput.schema';
import { DogUncheckedCreateWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateWithoutAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogCreateOrConnectWithoutAuthUserInput> = z
  .object({
    where: z.lazy(() => DogWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DogCreateWithoutAuthUserInputObjectSchema),
      z.lazy(() => DogUncheckedCreateWithoutAuthUserInputObjectSchema)
    ])
  })
  .strict();

export const DogCreateOrConnectWithoutAuthUserInputObjectSchema = Schema;
