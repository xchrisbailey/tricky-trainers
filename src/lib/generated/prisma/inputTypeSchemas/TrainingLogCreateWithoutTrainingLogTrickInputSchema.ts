import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateNestedOneWithoutTrainingLogInputSchema } from './DogCreateNestedOneWithoutTrainingLogInputSchema';
import { AuthUserCreateNestedOneWithoutTrainingLogInputSchema } from './AuthUserCreateNestedOneWithoutTrainingLogInputSchema';

export const TrainingLogCreateWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrainingLogCreateWithoutTrainingLogTrickInput> = z.object({
  id: z.string().cuid().optional(),
  dog: z.lazy(() => DogCreateNestedOneWithoutTrainingLogInputSchema),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutTrainingLogInputSchema)
}).strict();

export default TrainingLogCreateWithoutTrainingLogTrickInputSchema;
