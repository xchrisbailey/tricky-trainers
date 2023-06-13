import { z } from 'zod';
import { DogWhereUniqueInputObjectSchema } from './DogWhereUniqueInput.schema';
import { DogUpdateWithoutAuthUserInputObjectSchema } from './DogUpdateWithoutAuthUserInput.schema';
import { DogUncheckedUpdateWithoutAuthUserInputObjectSchema } from './DogUncheckedUpdateWithoutAuthUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogUpdateWithWhereUniqueWithoutAuthUserInput> = z
  .object({
    where: z.lazy(() => DogWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DogUpdateWithoutAuthUserInputObjectSchema),
      z.lazy(() => DogUncheckedUpdateWithoutAuthUserInputObjectSchema)
    ])
  })
  .strict();

export const DogUpdateWithWhereUniqueWithoutAuthUserInputObjectSchema = Schema;
