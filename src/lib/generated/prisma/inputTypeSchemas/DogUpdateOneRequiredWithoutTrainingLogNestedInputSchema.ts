import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateWithoutTrainingLogInputSchema } from './DogCreateWithoutTrainingLogInputSchema';
import { DogUncheckedCreateWithoutTrainingLogInputSchema } from './DogUncheckedCreateWithoutTrainingLogInputSchema';
import { DogCreateOrConnectWithoutTrainingLogInputSchema } from './DogCreateOrConnectWithoutTrainingLogInputSchema';
import { DogUpsertWithoutTrainingLogInputSchema } from './DogUpsertWithoutTrainingLogInputSchema';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithoutTrainingLogInputSchema } from './DogUpdateWithoutTrainingLogInputSchema';
import { DogUncheckedUpdateWithoutTrainingLogInputSchema } from './DogUncheckedUpdateWithoutTrainingLogInputSchema';

export const DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema: z.ZodType<Prisma.DogUpdateOneRequiredWithoutTrainingLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => DogCreateWithoutTrainingLogInputSchema),z.lazy(() => DogUncheckedCreateWithoutTrainingLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DogCreateOrConnectWithoutTrainingLogInputSchema).optional(),
  upsert: z.lazy(() => DogUpsertWithoutTrainingLogInputSchema).optional(),
  connect: z.lazy(() => DogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DogUpdateWithoutTrainingLogInputSchema),z.lazy(() => DogUncheckedUpdateWithoutTrainingLogInputSchema) ]).optional(),
}).strict();

export default DogUpdateOneRequiredWithoutTrainingLogNestedInputSchema;
