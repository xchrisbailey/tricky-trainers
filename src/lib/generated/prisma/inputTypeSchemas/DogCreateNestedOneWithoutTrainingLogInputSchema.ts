import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateWithoutTrainingLogInputSchema } from './DogCreateWithoutTrainingLogInputSchema';
import { DogUncheckedCreateWithoutTrainingLogInputSchema } from './DogUncheckedCreateWithoutTrainingLogInputSchema';
import { DogCreateOrConnectWithoutTrainingLogInputSchema } from './DogCreateOrConnectWithoutTrainingLogInputSchema';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';

export const DogCreateNestedOneWithoutTrainingLogInputSchema: z.ZodType<Prisma.DogCreateNestedOneWithoutTrainingLogInput> = z.object({
  create: z.union([ z.lazy(() => DogCreateWithoutTrainingLogInputSchema),z.lazy(() => DogUncheckedCreateWithoutTrainingLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DogCreateOrConnectWithoutTrainingLogInputSchema).optional(),
  connect: z.lazy(() => DogWhereUniqueInputSchema).optional()
}).strict();

export default DogCreateNestedOneWithoutTrainingLogInputSchema;
