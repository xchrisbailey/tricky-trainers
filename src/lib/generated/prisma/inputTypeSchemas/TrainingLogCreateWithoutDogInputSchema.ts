import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutTrainingLogInputSchema } from './AuthUserCreateNestedOneWithoutTrainingLogInputSchema';
import { TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema } from './TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema';

export const TrainingLogCreateWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogCreateWithoutDogInput> = z.object({
  id: z.string().cuid().optional(),
  user: z.lazy(() => AuthUserCreateNestedOneWithoutTrainingLogInputSchema),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickCreateNestedManyWithoutTraining_logInputSchema).optional()
}).strict();

export default TrainingLogCreateWithoutDogInputSchema;
