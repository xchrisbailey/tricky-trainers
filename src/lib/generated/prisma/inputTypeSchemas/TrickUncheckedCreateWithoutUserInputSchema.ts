import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema } from './TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema';

export const TrickUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TrickUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  example: z.string(),
  difficulty: z.number().int(),
  created_on: z.coerce.date().optional(),
  TrainingLogTrick: z.lazy(() => TrainingLogTrickUncheckedCreateNestedManyWithoutTrickInputSchema).optional()
}).strict();

export default TrickUncheckedCreateWithoutUserInputSchema;
