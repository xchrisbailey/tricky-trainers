import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogUpdateWithoutTrainingLogInputSchema } from './DogUpdateWithoutTrainingLogInputSchema';
import { DogUncheckedUpdateWithoutTrainingLogInputSchema } from './DogUncheckedUpdateWithoutTrainingLogInputSchema';
import { DogCreateWithoutTrainingLogInputSchema } from './DogCreateWithoutTrainingLogInputSchema';
import { DogUncheckedCreateWithoutTrainingLogInputSchema } from './DogUncheckedCreateWithoutTrainingLogInputSchema';

export const DogUpsertWithoutTrainingLogInputSchema: z.ZodType<Prisma.DogUpsertWithoutTrainingLogInput> = z.object({
  update: z.union([ z.lazy(() => DogUpdateWithoutTrainingLogInputSchema),z.lazy(() => DogUncheckedUpdateWithoutTrainingLogInputSchema) ]),
  create: z.union([ z.lazy(() => DogCreateWithoutTrainingLogInputSchema),z.lazy(() => DogUncheckedCreateWithoutTrainingLogInputSchema) ]),
}).strict();

export default DogUpsertWithoutTrainingLogInputSchema;
