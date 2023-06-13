import { z } from 'zod';
import { DogScalarWhereInputObjectSchema } from './DogScalarWhereInput.schema';
import { DogUpdateManyMutationInputObjectSchema } from './DogUpdateManyMutationInput.schema';
import { DogUncheckedUpdateManyWithoutDogsInputObjectSchema } from './DogUncheckedUpdateManyWithoutDogsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogUpdateManyWithWhereWithoutAuthUserInput> = z
  .object({
    where: z.lazy(() => DogScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DogUpdateManyMutationInputObjectSchema),
      z.lazy(() => DogUncheckedUpdateManyWithoutDogsInputObjectSchema)
    ])
  })
  .strict();

export const DogUpdateManyWithWhereWithoutAuthUserInputObjectSchema = Schema;
