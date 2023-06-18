import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithoutAuthUserInputSchema } from './DogUpdateWithoutAuthUserInputSchema';
import { DogUncheckedUpdateWithoutAuthUserInputSchema } from './DogUncheckedUpdateWithoutAuthUserInputSchema';
import { DogCreateWithoutAuthUserInputSchema } from './DogCreateWithoutAuthUserInputSchema';
import { DogUncheckedCreateWithoutAuthUserInputSchema } from './DogUncheckedCreateWithoutAuthUserInputSchema';

export const DogUpsertWithWhereUniqueWithoutAuthUserInputSchema: z.ZodType<Prisma.DogUpsertWithWhereUniqueWithoutAuthUserInput> = z.object({
  where: z.lazy(() => DogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DogUpdateWithoutAuthUserInputSchema),z.lazy(() => DogUncheckedUpdateWithoutAuthUserInputSchema) ]),
  create: z.union([ z.lazy(() => DogCreateWithoutAuthUserInputSchema),z.lazy(() => DogUncheckedCreateWithoutAuthUserInputSchema) ]),
}).strict();

export default DogUpsertWithWhereUniqueWithoutAuthUserInputSchema;
