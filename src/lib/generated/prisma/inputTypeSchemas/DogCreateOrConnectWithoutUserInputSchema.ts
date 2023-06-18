import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogCreateWithoutUserInputSchema } from './DogCreateWithoutUserInputSchema';
import { DogUncheckedCreateWithoutUserInputSchema } from './DogUncheckedCreateWithoutUserInputSchema';

export const DogCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.DogCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => DogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DogCreateWithoutUserInputSchema),z.lazy(() => DogUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default DogCreateOrConnectWithoutUserInputSchema;
