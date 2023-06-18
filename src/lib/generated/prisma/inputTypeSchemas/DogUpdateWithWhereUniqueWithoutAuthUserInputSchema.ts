import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithoutAuthUserInputSchema } from './DogUpdateWithoutAuthUserInputSchema';
import { DogUncheckedUpdateWithoutAuthUserInputSchema } from './DogUncheckedUpdateWithoutAuthUserInputSchema';

export const DogUpdateWithWhereUniqueWithoutAuthUserInputSchema: z.ZodType<Prisma.DogUpdateWithWhereUniqueWithoutAuthUserInput> = z.object({
  where: z.lazy(() => DogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DogUpdateWithoutAuthUserInputSchema),z.lazy(() => DogUncheckedUpdateWithoutAuthUserInputSchema) ]),
}).strict();

export default DogUpdateWithWhereUniqueWithoutAuthUserInputSchema;
