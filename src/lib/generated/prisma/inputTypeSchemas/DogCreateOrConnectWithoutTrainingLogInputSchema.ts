import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogCreateWithoutTrainingLogInputSchema } from './DogCreateWithoutTrainingLogInputSchema';
import { DogUncheckedCreateWithoutTrainingLogInputSchema } from './DogUncheckedCreateWithoutTrainingLogInputSchema';

export const DogCreateOrConnectWithoutTrainingLogInputSchema: z.ZodType<Prisma.DogCreateOrConnectWithoutTrainingLogInput> = z.object({
  where: z.lazy(() => DogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DogCreateWithoutTrainingLogInputSchema),z.lazy(() => DogUncheckedCreateWithoutTrainingLogInputSchema) ]),
}).strict();

export default DogCreateOrConnectWithoutTrainingLogInputSchema;
