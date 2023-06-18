import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithoutUserInputSchema } from './DogUpdateWithoutUserInputSchema';
import { DogUncheckedUpdateWithoutUserInputSchema } from './DogUncheckedUpdateWithoutUserInputSchema';
import { DogCreateWithoutUserInputSchema } from './DogCreateWithoutUserInputSchema';
import { DogUncheckedCreateWithoutUserInputSchema } from './DogUncheckedCreateWithoutUserInputSchema';

export const DogUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DogUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => DogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DogUpdateWithoutUserInputSchema),z.lazy(() => DogUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => DogCreateWithoutUserInputSchema),z.lazy(() => DogUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default DogUpsertWithWhereUniqueWithoutUserInputSchema;
