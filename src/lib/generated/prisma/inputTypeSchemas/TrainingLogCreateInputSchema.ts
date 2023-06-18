import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateNestedOneWithoutTrainingLogInputSchema } from './DogCreateNestedOneWithoutTrainingLogInputSchema';
import { AuthUserCreateNestedOneWithoutTrainingLogInputSchema } from './AuthUserCreateNestedOneWithoutTrainingLogInputSchema';
import { TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema } from './TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema';

export const TrainingLogCreateInputSchema: z.ZodType<Prisma.TrainingLogCreateInput> = z.object({
  id: z.string().cuid().optional(),
  dog: z.lazy(() => DogCreateNestedOneWithoutTrainingLogInputSchema),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutTrainingLogInputSchema),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema).optional()
}).strict();

export default TrainingLogCreateInputSchema;
