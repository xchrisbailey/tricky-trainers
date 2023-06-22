import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithoutUserInputSchema } from './DogUpdateWithoutUserInputSchema';
import { DogUncheckedUpdateWithoutUserInputSchema } from './DogUncheckedUpdateWithoutUserInputSchema';

export const DogUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DogUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => DogWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => DogUpdateWithoutUserInputSchema),
        z.lazy(() => DogUncheckedUpdateWithoutUserInputSchema)
      ])
    })
    .strict();

export default DogUpdateWithWhereUniqueWithoutUserInputSchema;
