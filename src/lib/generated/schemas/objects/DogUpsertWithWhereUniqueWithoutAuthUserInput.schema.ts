import { z } from 'zod';
import { DogWhereUniqueInputObjectSchema } from './DogWhereUniqueInput.schema';
import { DogUpdateWithoutAuthUserInputObjectSchema } from './DogUpdateWithoutAuthUserInput.schema';
import { DogUncheckedUpdateWithoutAuthUserInputObjectSchema } from './DogUncheckedUpdateWithoutAuthUserInput.schema';
import { DogCreateWithoutAuthUserInputObjectSchema } from './DogCreateWithoutAuthUserInput.schema';
import { DogUncheckedCreateWithoutAuthUserInputObjectSchema } from './DogUncheckedCreateWithoutAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogUpsertWithWhereUniqueWithoutAuthUserInput> = z
  .object({
    where: z.lazy(() => DogWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DogUpdateWithoutAuthUserInputObjectSchema),
      z.lazy(() => DogUncheckedUpdateWithoutAuthUserInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => DogCreateWithoutAuthUserInputObjectSchema),
      z.lazy(() => DogUncheckedCreateWithoutAuthUserInputObjectSchema)
    ])
  })
  .strict();

export const DogUpsertWithWhereUniqueWithoutAuthUserInputObjectSchema = Schema;
