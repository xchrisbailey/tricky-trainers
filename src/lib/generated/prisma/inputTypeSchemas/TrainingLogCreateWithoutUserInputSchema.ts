import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateNestedOneWithoutTrainingLogInputSchema } from './DogCreateNestedOneWithoutTrainingLogInputSchema';
import { TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema } from './TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema';

export const TrainingLogCreateWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  dog: z.lazy(() => DogCreateNestedOneWithoutTrainingLogInputSchema),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema).optional()
}).strict();

export default TrainingLogCreateWithoutUserInputSchema;
