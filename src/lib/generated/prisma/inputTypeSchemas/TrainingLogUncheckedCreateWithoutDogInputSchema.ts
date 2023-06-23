import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema } from './TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema';

export const TrainingLogUncheckedCreateWithoutDogInputSchema: z.ZodType<Prisma.TrainingLogUncheckedCreateWithoutDogInput> = z.object({
  id: z.string().cuid().optional(),
  user_id: z.string(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickUncheckedCreateNestedManyWithoutTraining_logInputSchema).optional()
}).strict();

export default TrainingLogUncheckedCreateWithoutDogInputSchema;
