import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogScalarWhereInputSchema } from './DogScalarWhereInputSchema';
import { DogUpdateManyMutationInputSchema } from './DogUpdateManyMutationInputSchema';
import { DogUncheckedUpdateManyWithoutDogsInputSchema } from './DogUncheckedUpdateManyWithoutDogsInputSchema';

export const DogUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.DogUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => DogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DogUpdateManyMutationInputSchema),z.lazy(() => DogUncheckedUpdateManyWithoutDogsInputSchema) ]),
}).strict();

export default DogUpdateManyWithWhereWithoutUserInputSchema;
