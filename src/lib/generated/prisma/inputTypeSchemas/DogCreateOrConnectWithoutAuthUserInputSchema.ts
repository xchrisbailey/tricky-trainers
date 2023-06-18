import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogCreateWithoutAuthUserInputSchema } from './DogCreateWithoutAuthUserInputSchema';
import { DogUncheckedCreateWithoutAuthUserInputSchema } from './DogUncheckedCreateWithoutAuthUserInputSchema';

export const DogCreateOrConnectWithoutAuthUserInputSchema: z.ZodType<Prisma.DogCreateOrConnectWithoutAuthUserInput> = z.object({
  where: z.lazy(() => DogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DogCreateWithoutAuthUserInputSchema),z.lazy(() => DogUncheckedCreateWithoutAuthUserInputSchema) ]),
}).strict();

export default DogCreateOrConnectWithoutAuthUserInputSchema;
